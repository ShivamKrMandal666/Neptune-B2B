"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, BadgeCheck, Building2 } from "lucide-react";

const CertificatePdfViewer = dynamic(
  () => import("./CertificatePdfViewer"),
  { ssr: false, loading: () => null },
);

export const UDYAM = {
  regNo: "UDYAM-UP-29-0251726",
  enterprise: "NEPTUNE B2B",
  type: "Micro",
  typeYear: "2026-27",
  majorActivity: "Services",
  socialCategory: "OBC",
  unit: "NEPTUNE B2B",
  address:
    "50, Aggarwal House, Panchsheel Park, Rajender Nagar, Shahibad, Ghaziabad, Uttar Pradesh - 201005",
  incorporation: "06/08/2026",
  commencement: "06/08/2026",
  regDate: "07/08/2026",
  nic: [
    { sno: "1", digit: "62012", activity: "Web designing services", cat: "Services" },
  ],
  dic: "Ghaziabad (Uttar Pradesh)",
  msmeDfo: "Delhi (Delhi)",
};



export function UdyamCertificate() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Preview card shown in hero */}
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1D4ED8]">
              Govt. of India · MSME
            </p>
            <p className="font-display text-sm font-bold tracking-tight text-[#0F172A]">
              Udyam Registration Certificate
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-[#F5F8FF] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Registration No.
            </p>
            <p className="mt-0.5 font-display text-lg font-black tracking-tight text-[#1D4ED8]">
              {UDYAM.regNo}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E0E7FF] text-[#1D4ED8]">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">{UDYAM.enterprise}</p>
              <p className="text-[11px] text-slate-400">
                {UDYAM.type} Enterprise · {UDYAM.majorActivity}
              </p>
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

      <CertificatePdfViewer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
