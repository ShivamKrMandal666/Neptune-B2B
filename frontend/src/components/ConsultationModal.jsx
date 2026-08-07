import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Loader2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { useConsultation } from "@/context/ConsultationContext";
import { BUDGETS } from "@/lib/data";

const empty = { name: "", email: "", business: "", details: "", budget: "" };

export const ConsultationModal = () => {
  const { open, setOpen } = useConsultation();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));
    setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.details.trim()) e.details = "Tell us a little about the project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      toast.success("Request received", { description: "We'll be in touch within 24 hours." });
    }, 1400);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setForm(empty);
      setErrors({});
      setStatus("idle");
    }, 300);
  };

  const field =
    "w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-[border,box-shadow] duration-200 focus:border-transparent focus:ring-2 focus:ring-[#1D4ED8]";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-testid="consultation-modal"
        >
          <motion.div
            className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden bg-[#1D4ED8] px-7 py-6 text-white">
              <div className="grain grain-dark" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">Neptune B2B</p>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">Book a Consultation</h3>
                </div>
                <button
                  onClick={close}
                  data-testid="consultation-close-btn"
                  className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center px-8 py-14 text-center" data-testid="consultation-success">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]"
                >
                  <Check className="h-8 w-8" strokeWidth={2.4} />
                </motion.div>
                <h4 className="mt-6 font-display text-xl font-bold">Request received</h4>
                <p className="mt-2 max-w-xs text-sm text-slate-500">
                  Thanks, {form.name.split(" ")[0] || "there"}. You'll hear back from me directly within 24 hours.
                </p>
                <button
                  onClick={close}
                  data-testid="consultation-done-btn"
                  className="mt-7 rounded-full bg-[#0F172A] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 px-7 py-6" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0F172A]">Name</label>
                    <input
                      data-testid="consult-name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={field}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0F172A]">Email</label>
                    <input
                      data-testid="consult-email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className={field}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#0F172A]">Business Name</label>
                  <input
                    data-testid="consult-business"
                    value={form.business}
                    onChange={set("business")}
                    placeholder="Your company (optional)"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#0F172A]">Budget</label>
                  <div className="flex flex-wrap gap-2" data-testid="consult-budget-group">
                    {BUDGETS.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => set("budget")(b)}
                        className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                          form.budget === b
                            ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                            : "border-[#E2E8F0] bg-white text-slate-600 hover:border-[#1D4ED8]/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#0F172A]">Project Details</label>
                  <textarea
                    data-testid="consult-details"
                    value={form.details}
                    onChange={set("details")}
                    rows={3}
                    placeholder="What are you building, and what should it achieve?"
                    className={`${field} resize-none`}
                  />
                  {errors.details && <p className="mt-1 text-xs text-red-500">{errors.details}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-testid="consult-submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#1D4ED8] py-4 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Request Consultation
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
