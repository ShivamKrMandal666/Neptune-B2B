// ── Shared type definitions ───────────────────────────────────────────────

export interface AgencyInfo {
  name: string;
  founder: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Usp {
  key: string;
  icon: string;
  title: string;
  desc: string;
  span?: boolean;
}

export interface Service {
  key: string;
  num: string;
  icon: string;
  name: string;
  desc: string;
  includes: string[];
}

export interface ProcessStep {
  n: string;
  icon: string;
  title: string;
  desc: string;
}

export interface ManifestoItem {
  n: string;
  title: string;
  body: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
