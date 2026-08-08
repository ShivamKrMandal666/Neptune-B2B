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
} from "lucide-react";

const MAP = {
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

export const Icon = ({ name, ...props }) => {
  const C = MAP[name] || Sparkles;
  return <C {...props} />;
};
