import type { AgencyInfo, Usp, Service, ProcessStep, ManifestoItem } from "@/lib/types";

export const AGENCY: AgencyInfo = {
  name: "Neptune B2B",
  founder: "Mandal Chandrashekhar Diwakar",
  role: "Founder & Full-Stack Developer",
  email: "hello@neptuneb2b.com",
  phone: "+91 98106 15262",
  linkedin: "https://www.linkedin.com/in/mandal-chandrashekhar-diwakar",
  github: "https://github.com/ShivamKrMandal666",
};

export const USPS: Usp[] = [
  {
    key: "conversion",
    icon: "Target",
    title: "High-Conversion Funnels",
    desc: "Every page is engineered to move a visitor one step closer to booking.",
    span: true,
  },
  { key: "design", icon: "Sparkles", title: "Modern, Premium Design", desc: "Boutique craft, never a template." },
  { key: "speed", icon: "Zap", title: "Fast Load Speed", desc: "Performance treated as a feature." },
  { key: "seo", icon: "Search", title: "SEO-Ready", desc: "Clean semantics out of the box." },
  { key: "mobile", icon: "Smartphone", title: "Mobile-Optimized", desc: "Flawless on every screen size." },
];

export const SERVICES: Service[] = [
  {
    key: "web-dev",
    num: "01",
    icon: "LayoutTemplate",
    name: "Website Development",
    desc: "Full custom business websites built around your conversion goals — not a template with your logo dropped in.",
    includes: ["Custom design & build", "Conversion-first architecture", "SEO-ready semantics", "Fully responsive"],
  },
  {
    key: "landing",
    num: "02",
    icon: "Rocket",
    name: "Landing Pages",
    desc: "Focused, high-conversion single pages for campaigns and offers, engineered to turn traffic into booked calls.",
    includes: ["Single-goal funnel", "Fast load speed", "A/B ready structure", "Mobile-optimized"],
  },
  {
    key: "redesign",
    num: "03",
    icon: "RefreshCw",
    name: "Website Redesign",
    desc: "Modernizing and re-optimizing an existing site so it finally converts — without losing what already works.",
    includes: ["Conversion audit", "Modern premium redesign", "Performance overhaul", "SEO preservation"],
  },
  {
    key: "responsive",
    num: "04",
    icon: "MonitorSmartphone",
    name: "Responsive Development",
    desc: "Ensuring flawless performance and pixel discipline across desktop, tablet, and mobile — every breakpoint.",
    includes: ["Mobile-first builds", "Cross-device QA", "Touch-optimized UX", "Speed on every device"],
  },
  {
    key: "maintenance",
    num: "05",
    icon: "Wrench",
    name: "Website Maintenance",
    desc: "Keeping your site fast, secure, and up to date after launch — so it keeps converting without a second thought.",
    includes: ["Updates & security patches", "Uptime & performance monitoring", "Content & bug fixes", "Monthly health reports"],
  },
];

export const PROCESS: ProcessStep[] = [
  { n: "01", icon: "Compass", title: "Discovery", desc: "Understanding your business, goals, and audience before a single pixel is placed." },
  { n: "02", icon: "Map", title: "Planning", desc: "Mapping the site structure and the conversion strategy behind it." },
  { n: "03", icon: "FileSignature", title: "Contract", desc: "A formal agreement so scope and expectations are clear before work begins." },
  { n: "04", icon: "CreditCard", title: "50% Upfront Payment", desc: "Project kickoff payment to reserve the build slot and start work." },
  { n: "05", icon: "LayoutDashboard", title: "Client Portal", desc: "A dedicated portal set up for collaboration, files, and live updates." },
  { n: "06", icon: "PenTool", title: "Design", desc: "Crafting the visual design of the website, tuned for conversion." },
  { n: "07", icon: "ImagePlus", title: "Content & Image Collection", desc: "Gathering your images, copy, and brand assets for the build." },
  { n: "08", icon: "Code2", title: "Development", desc: "Building the actual website — fast, semantic, and responsive." },
  { n: "09", icon: "MessagesSquare", title: "3 Rounds of Revisions", desc: "Structured feedback meetings and refinement, no endless loops." },
  { n: "10", icon: "Wallet", title: "50% Final Payment", desc: "Balance due before launch, once you're happy with the result." },
  { n: "11", icon: "Rocket", title: "Launch", desc: "The site goes live — configured, tested, and ready to convert." },
  { n: "12", icon: "LifeBuoy", title: "Support", desc: "Post-launch support so your site keeps performing after day one." },
];

export const MANIFESTO: ManifestoItem[] = [
  { n: "01", title: "Conversion is the product", body: "A beautiful site that doesn't book calls is a failed site. Everything is measured against one question — did it move the visitor forward?" },
  { n: "02", title: "You work with the builder", body: "No account managers. No hand-offs. You talk directly to the person writing the code and shaping the strategy." },
  { n: "03", title: "Speed is respect", body: "Fast pages respect your visitor's time and Google's crawler. Performance is a first-class feature, not an afterthought." },
];

export const BUDGETS: string[] = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹3,00,000",
  "₹3,00,000+",
  "Not sure yet",
];
