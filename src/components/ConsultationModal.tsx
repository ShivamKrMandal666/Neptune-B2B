"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-[#0F172A]/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Panel */}
        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-[70] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.18)] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-half data-[state=closed]:slide-out-to-top-48 data-[state=open]:slide-in-from-left-half data-[state=open]:slide-in-from-top-48 md:p-10 max-h-[90vh] overflow-y-auto"
          aria-describedby="consultation-modal-desc"
        >
          {/* Header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-2xl font-bold tracking-tight text-[#0F172A]">
                Book a Consultation
              </Dialog.Title>
              <Dialog.Description
                id="consultation-modal-desc"
                className="mt-1 text-sm text-slate-500"
              >
                Tell me about your project — I&apos;ll get back to you within 24 hours.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] text-slate-400 transition-colors hover:border-[#1D4ED8]/30 hover:text-[#1D4ED8]"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Form */}
          <ConsultationForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
