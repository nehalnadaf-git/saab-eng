export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  href: string;
  features: string[];
}

export const industries: IndustryItem[] = [
  {
    id: "automotive",
    name: "Automotive Components",
    description: "Precision components manufactured for automotive applications through cold forging, heat treatment, CNC machining and quality inspection.",
    image: "/images/industry-automotive.webp",
    icon: "CarFront",
    href: "/industries#automotive",
    features: ["Precision component production", "Forged and machined parts", "Integrated heat treatment", "Customer-specific requirements"],
  },
  {
    id: "engineering-components",
    name: "Engineering Components",
    description: "Engineering-component manufacturing from forming and machining through inspection, with integrated production support in Bengaluru.",
    image: "/images/industry-engineering.webp",
    icon: "Cog",
    href: "/industries#engineering-components",
    features: ["Cold-forged components", "Machined components", "Tool-room support", "Documented quality inspection"],
  },
  {
    id: "precision-machining",
    name: "Precision Machining",
    description: "CNC turning, VMC, polygon milling, Muratech CNC turning and CNC cutting for accurate, delivery-focused component manufacturing.",
    image: "/images/industry-precision-machining.webp",
    icon: "Settings2",
    href: "/industries#precision-machining",
    features: ["CNC turning centres", "VMC and polygon milling", "Muratech CNC turning", "Capacity responsive to customer needs"],
  },
  {
    id: "cold-forging",
    name: "Cold Forging",
    description: "Cold-forging operations with hydraulic and mechanical presses from 160 to 1500 tons, integrated with downstream machining.",
    image: "/images/industry-cold-forging.webp",
    icon: "Hammer",
    href: "/industries#cold-forging",
    features: ["160 to 1500-ton press range", "1500-ton hydraulic press", "Forged component production", "Integrated manufacturing flow"],
  },
  {
    id: "heat-treatment",
    name: "Heat Treatment",
    description: "Sealed quench, washing, tempering and annealing operations supporting component performance and the integrated manufacturing system.",
    image: "/images/industry-heat-treatment.webp",
    icon: "Flame",
    href: "/industries#heat-treatment",
    features: ["Two sealed quench furnaces", "1.2-tonne total capacity", "Two tempering furnaces", "Five annealing furnaces"],
  },
  {
    id: "quality",
    name: "Quality & Metrology",
    description: "Standards-room capability using dimensional, surface, gear, magnetic-particle and balance testing to support manufacturing quality.",
    image: "/images/industry-quality.webp",
    icon: "ScanSearch",
    href: "/industries#quality",
    features: ["CMM inspection", "Roundness and gear testing", "Profile projector with DRO", "Magnaflux and dynamic balancing"],
  },
  {
    id: "production-monitoring",
    name: "Production Monitoring",
    description: "PL Monitor connects machines to a central system for live status, production data, charts and management information.",
    image: "/images/industry-production-monitoring.webp",
    icon: "MonitorCog",
    href: "/industries#production-monitoring",
    features: ["Second-to-second machine status", "Central database", "Scan mode", "Java software for Windows and Linux"],
  },
  {
    id: "hifi-audio-racks",
    name: "Hi-Fi Audio Racks",
    description: "A dedicated SAAB Engineering product area for Hi-Fi audio racks, retained as a separate offering from the core component-manufacturing business.",
    image: "/images/industry-hifi-racks.webp",
    icon: "Speaker",
    href: "/industries#hifi-audio-racks",
    features: ["Dedicated product category", "Separate from component manufacturing", "Product details to be confirmed", "Enquiries handled by SAAB Engineering"],
  },
];
