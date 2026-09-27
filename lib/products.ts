export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  intro: string;
  features: string[];
  standard: string;
  heroImage: string;
  specImage: string;
  listingImage: string;
  gallery: { src: string; alt: string }[];
  specs?: ProductSpec[];
}

export const products: Product[] = [
  {
    slug: "cnc-machining",
    name: "CNC Machining",
    intro: "Precision machining for automotive and engineering components, supported by continuously upgraded CNC equipment and responsive capacity planning.",
    features: ["CNC turning centres for production components", "VMC and polygon milling capability", "Muratech CNC turning machines", "CNC cutting operations", "Equipment updated for accuracy and delivery performance", "Capacity can be enhanced for customer requirements"],
    standard: "Customer-specific requirements",
    heroImage: "/images/cnc-machining-hero.webp",
    specImage: "/images/cnc-machining-spec.webp",
    listingImage: "/images/cnc-machining-card.webp",
    gallery: [
      { src: "/images/gallery-cnc-turning.webp", alt: "Precision CNC spindle machining component" },
      { src: "/images/gallery-cnc-components.webp", alt: "Precision machined automotive and engineering components" },
      { src: "/images/gallery-vmc-milling.webp", alt: "High-accuracy vertical machining center setup" },
    ],
    specs: [{ label: "Equipment", value: "CNC turning, VMC, polygon milling, Muratech CNC and CNC cutting" }, { label: "Capacity", value: "Enhanced based on customer requirement" }],
  },
  {
    slug: "cold-forging",
    name: "Cold Forging",
    intro: "Cold-forged components manufactured through an integrated forming and machining operation for demanding automotive and engineering applications.",
    features: ["Hydraulic and mechanical presses", "Press capacity range from 160 to 1500 tons", "Largest listed press: 1500-ton hydraulic", "Forged and machined component production", "Integrated with heat treatment and precision machining", "Tool-room support for production tooling"],
    standard: "Customer-specific requirements",
    heroImage: "/images/cold-forging-hero.webp",
    specImage: "/images/cold-forging-spec.webp",
    listingImage: "/images/cold-forging-card.webp",
    gallery: [
      { src: "/images/gallery-forging-press.webp", alt: "1500-ton hydraulic cold forging press" },
      { src: "/images/gallery-forged-parts.webp", alt: "Precision cold-forged bevel gears, splines, and shafts" },
    ],
    specs: [{ label: "Press range", value: "160 to 1500 tons listed" }, { label: "Largest press", value: "1500-ton hydraulic press" }],
  },
  {
    slug: "heat-treatment",
    name: "Heat Treatment",
    intro: "In-house heat treatment supporting forged and machined components through sealed quenching, washing, tempering and annealing operations.",
    features: ["Two sealed quench furnaces", "1.2-tonne total sealed-quench capacity", "Two washing machines associated with sealed quench", "Two tempering furnaces", "Five annealing furnaces", "Pit-type furnaces for pre-forging annealing"],
    standard: "Process-specific requirements",
    heroImage: "/images/heat-treatment-hero.webp",
    specImage: "/images/heat-treatment-spec.webp",
    listingImage: "/images/heat-treatment-card.webp",
    gallery: [
      { src: "/images/gallery-heat-furnace.webp", alt: "Automated sealed quench furnace line and washing unit" },
      { src: "/images/gallery-heat-microstructure.webp", alt: "Case-hardened and tempered transmission gear components" },
    ],
    specs: [{ label: "Sealed quench", value: "Two furnaces, 0.6 tonne each" }, { label: "Other equipment", value: "One washing machine, two tempering and five annealing furnaces" }],
  },
  {
    slug: "tool-room",
    name: "Tool Room",
    intro: "Tool-room operations supporting the company's cold-forging, machining and production requirements.",
    features: ["Tooling support for cold-forging production", "Production-focused engineering assistance", "Integrated support for machining operations", "Tooling development around customer requirements"],
    standard: "Customer-specific requirements",
    heroImage: "/images/tool-room-hero.webp",
    specImage: "/images/tool-room-spec.webp",
    listingImage: "/images/tool-room-card.webp",
    gallery: [
      { src: "/images/gallery-tool-dies.webp", alt: "Precision cold-forging die inserts and carbide punches" },
      { src: "/images/gallery-tool-grinding.webp", alt: "Toolroom wire EDM and die-sinking EDM machinery" },
    ],
  },
  {
    slug: "quality-inspection",
    name: "Quality & Metrology",
    intro: "Standards-room and quality-assurance capability for dimensional inspection, testing and traceable manufacturing decisions.",
    features: ["Coordinate Measuring Machine", "Roundness tester", "Gear testing machine", "Profile projector with DRO", "Magnaflux magnetic-particle testing", "Dynamic balancing machine"],
    standard: "ISO/TS 16949 stated",
    heroImage: "/images/quality-inspection-hero.webp",
    specImage: "/images/quality-inspection-spec.webp",
    listingImage: "/images/quality-inspection-card.webp",
    gallery: [
      { src: "/images/gallery-cmm-probe.webp", alt: "ZEISS CMM ruby probe inspecting transmission casing" },
      { src: "/images/gallery-metrology-lab.webp", alt: "Optical profile projector with DRO and precision height gauge" },
    ],
    specs: [{ label: "Quality system", value: "ISO/TS 16949 stated on company history page" }, { label: "Inspection", value: "Dimensional, roundness, gear, profile, magnetic-particle and balance testing" }],
  },
  {
    slug: "pl-monitor",
    name: "PL Monitor",
    intro: "An in-house production-logging and management-information system that connects machines to a central computer for live shop-floor visibility.",
    features: ["Second-to-second machine-status data", "Central monitoring computer and database", "Charts generated from collected production data", "Scan mode updates the database through hardware interaction", "Java software for Windows and Linux environments", "Available for organisations seeking shop-floor efficiency"],
    standard: "In-house MIS platform",
    heroImage: "/images/pl-monitor-hero.webp",
    specImage: "/images/pl-monitor-spec.webp",
    listingImage: "/images/pl-monitor-card.webp",
    gallery: [
      { src: "/images/gallery-pl-dashboard.webp", alt: "Smart manufacturing central monitoring video wall" },
      { src: "/images/gallery-smart-factory.webp", alt: "Industrial touchscreen terminal mounted on CNC machine" },
    ],
    specs: [{ label: "Software", value: "Java" }, { label: "Platforms", value: "Windows and Linux" }],
  },
];
