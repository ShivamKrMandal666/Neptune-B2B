"use client";

import { createContext, useContext, useState } from "react";
import { ConsultationModal } from "@/components/ConsultationModal";

interface ConsultationContextValue {
  open: () => void;
}

const ConsultationContext = createContext<ConsultationContextValue>({
  open: () => {},
});

export function useConsultation(): ConsultationContextValue {
  return useContext(ConsultationContext);
}

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConsultationContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ConsultationContext.Provider>
  );
}
