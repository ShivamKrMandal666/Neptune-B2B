"use client";

import { useEffect, useRef } from "react";
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
  const modalRef = useRef<HTMLDivElement>(null);
  const priorFocusRef = useRef<HTMLElement | null>(null);
  // Close on Escape key.
  // Also reclaim focus from the PDF iframe so Escape keeps firing on the
  // host document even after the user clicks inside the embedded PDF.
  useEffect(() => {
    if (!open) return;

    // Save the element that had focus before the modal opened, then
    // move focus into the modal panel.
    priorFocusRef.current = document.activeElement as HTMLElement;
    requestAnimationFrame(() => modalRef.current?.focus({ preventScroll: true }));

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }

      // Tab trap — keep focus inside the modal panel.
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const els = Array.from(focusable);
        if (els.length === 0) { e.preventDefault(); return; }
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    };

    // When focus moves into the PDF iframe the host window fires a blur event.
    // Immediately refocus the modal panel so keydown events stay on the
    // host document.
    const reclaimFocus = () => {
      requestAnimationFrame(() => {
        if (document.activeElement instanceof HTMLIFrameElement) {
          modalRef.current?.focus({ preventScroll: true });
        }
      });
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("blur", reclaimFocus, { capture: true });
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("blur", reclaimFocus, { capture: true });
      // Restore focus to the element that was active before the modal opened.
      priorFocusRef.current?.focus({ preventScroll: true });
    };
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
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Udyam Registration Certificate"
            className="relative z-10 flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.3)] outline-none"
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
