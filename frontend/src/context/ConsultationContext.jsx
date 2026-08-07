import { createContext, useContext, useState } from "react";

const ConsultationContext = createContext(null);

export const ConsultationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  return (
    <ConsultationContext.Provider value={{ open, setOpen, openModal }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used within ConsultationProvider");
  return ctx;
};
