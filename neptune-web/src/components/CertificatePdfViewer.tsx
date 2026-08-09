"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

interface CertificatePdfViewerProps {
  open: boolean;
  onClose: () => void;
}

export default function CertificatePdfViewer({
  open,
  onClose,
}: CertificatePdfViewerProps) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-testid="udyam-modal"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal panel */}
          <motion.div
            className="relative z-10 flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.3)]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden bg-[#1D4ED8] px-7 py-6 text-white">
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
                    <h3 className="mt-0.5 font-display text-xl font-bold tracking-tight">
                      Udyam Registration Certificate
                    </h3>
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

            {/* PDF iframe — fills remaining height */}
            <div className="min-h-0 flex-1">
              <iframe
                src="/documents/udyam-certificate.pdf"
                title="Udyam Registration Certificate"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
