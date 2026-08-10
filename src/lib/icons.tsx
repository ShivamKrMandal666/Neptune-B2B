import {
  Target,
  Sparkles,
  Zap,
  Search,
  Smartphone,
  LayoutTemplate,
  Rocket,
  RefreshCw,
  MonitorSmartphone,
  Compass,
  Map,
  FileSignature,
  CreditCard,
  LayoutDashboard,
  PenTool,
  ImagePlus,
  Code2,
  MessagesSquare,
  Wallet,
  LifeBuoy,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { FC } from "react";

const MAP: Record<string, FC<LucideProps>> = {
  Target,
  Sparkles,
  Zap,
  Search,
  Smartphone,
  LayoutTemplate,
  Rocket,
  RefreshCw,
  MonitorSmartphone,
  Compass,
  Map,
  FileSignature,
  CreditCard,
  LayoutDashboard,
  PenTool,
  ImagePlus,
  Code2,
  MessagesSquare,
  Wallet,
  LifeBuoy,
  Wrench,
};

interface IconProps extends LucideProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  const C = MAP[name] ?? Sparkles;
  return <C {...props} />;
}
