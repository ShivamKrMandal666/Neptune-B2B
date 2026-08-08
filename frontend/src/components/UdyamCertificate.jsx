import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Eye, X, BadgeCheck, MapPin, Building2 } from "lucide-react";

export const UDYAM = {
  regNo: "UDYAM-UP-29-0251726",
  enterprise: "NEPTUNE B2B",
  type: "Micro",
  typeYear: "2026-27",
  majorActivity: "Services",
  socialCategory: "OBC",
  unit: "NEPTUNE B2B",
  address: "50, Aggarwal House, Panchsheel Park, Rajender Nagar, Shahibad, Ghaziabad, Uttar Pradesh - 201005",
  incorporation: "06/08/2026",
  commencement: "06/08/2026",
  regDate: "07/08/2026",
  nic: [
    { sno: "1", digit: "62012", activity: "Web designing services", cat: "Services" },
  ],
  dic: "Ghaziabad (Uttar Pradesh)",
  msmeDfo: "Delhi (Delhi)",
};

const Row = ({ label, value }) => (
  <div className="grid grid-cols-1 gap-1 border-b border-[#E2E8F0] py-3 sm:grid-cols-3 sm:gap-4">
    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
    <dd className="text-sm font-medium text-[#0F172A] sm:col-span-2">{value}</dd>
  </div>
);

const CertificateModal = ({ open, onClose }) =>
  createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-testid="udyam-modal"
        >
        <motion.div
          className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.3)]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="relative overflow-hidden bg-[#1D4ED8] px-7 py-6 text-white">
            <div className="grain grain-dark" />
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Government of India · Ministry of MSME
                  </p>
                  <h3 className="mt-0.5 font-display text-xl font-bold tracking-tight">Udyam Registration Certificate</h3>
                </div>
              </div>
              <button
                onClick={onClose}
                data-testid="udyam-close-btn"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Close certificate"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="max-h-[calc(88vh-96px)] overflow-y-auto px-7 py-6">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E0E7FF] bg-[#F5F8FF] p-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Udyam Registration Number</p>
                <p className="mt-1 font-display text-2xl font-black tracking-tight text-[#1D4ED8]">{UDYAM.regNo}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D4ED8] px-3.5 py-1.5 text-xs font-semibold text-white">
                <BadgeCheck className="h-4 w-4" /> Verified · {UDYAM.type}
              </span>
            </div>

            <dl className="mt-4">
              <Row label="Name of Enterprise" value={UDYAM.enterprise} />
              <Row label="Type of Enterprise" value={`${UDYAM.type} (${UDYAM.typeYear})`} />
              <Row label="Major Activity" value={UDYAM.majorActivity} />
              <Row label="Social Category" value={UDYAM.socialCategory} />
              <Row label="Name of Unit" value={UDYAM.unit} />
              <Row
                label="Registered Address"
                value={
                  <span className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" />
                    {UDYAM.address}
                  </span>
                }
              />
              <Row label="Date of Incorporation" value={UDYAM.incorporation} />
              <Row label="Date of Commencement" value={UDYAM.commencement} />
              <Row
                label="NIC Classification"
                value={UDYAM.nic.map((n) => `${n.digit} — ${n.activity} (${n.cat})`).join(", ")}
              />
              <Row label="Date of Udyam Registration" value={UDYAM.regDate} />
              <Row label="DIC" value={UDYAM.dic} />
              <Row label="MSME-DFO" value={UDYAM.msmeDfo} />
            </dl>

            <p className="mt-5 text-center text-xs text-slate-400">
              This is a digital representation of the official Udyam Registration Certificate issued to {UDYAM.enterprise}.
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>,
    document.body
  );

export const UdyamCertificate = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Template preview card (shown in hero) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
        data-testid="udyam-card"
      >
        <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8] text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1D4ED8]">Govt. of India · MSME</p>
            <p className="font-display text-sm font-bold tracking-tight text-[#0F172A]">Udyam Registration Certificate</p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-[#F5F8FF] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Registration No.</p>
            <p className="mt-0.5 font-display text-lg font-black tracking-tight text-[#1D4ED8]">{UDYAM.regNo}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E0E7FF] text-[#1D4ED8]">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">{UDYAM.enterprise}</p>
              <p className="text-[11px] text-slate-400">{UDYAM.type} Enterprise · {UDYAM.majorActivity}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          data-testid="udyam-view-btn"
          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#1D4ED8] py-3 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF]"
        >
          <Eye className="h-4 w-4" />
          View Certificate
        </button>
      </motion.div>

      {/* Floating verified badge */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 -top-6 flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-lg"
      >
        <BadgeCheck className="h-5 w-5 text-[#1D4ED8]" />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">MSME</p>
          <p className="font-display text-sm font-bold text-[#0F172A]">Registered</p>
        </div>
      </motion.div>

      <CertificateModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
