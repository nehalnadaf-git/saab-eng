"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, MoveRight } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "@/components/Header";
import Valve3DModel from "@/components/Valve3DModel";
import IndustryCard from "@/components/IndustryCard";
import AnimatedStats from "@/components/AnimatedStats";
import { industries } from "@/lib/industries";
import { products } from "@/lib/products";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const faqItems: [string, string][] = [
  [
    "What does SAAB Engineering manufacture?",
    "SAAB Engineering manufactures automotive and engineering components through cold forging, heat treatment, CNC machining, tooling and quality inspection.",
  ],
  [
    "Can capacity be enhanced for a customer requirement?",
    "The CNC facility states that capacity can be enhanced based on customer requirement. Contact the team to discuss a production program.",
  ],
  [
    "Where is SAAB Engineering located?",
    "SAAB Engineering operates manufacturing facilities in Bommasandra, Bengaluru, with its sister concern Savin CNC Engineering in Jigani.",
  ],
];

const orgJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAAB Engineering",
  url: "https://www.saabengg.com",
  email: "sanjiv@saabengg.com",
  foundingDate: "1986",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B 41/42, KSSIDC Industrial Estate, Bommasandra",
    addressLocality: "Bengaluru",
    postalCode: "560099",
    addressCountry: "IN",
  },
};

export default function Home() {
  const [faq, setFaq] = useState(0);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
      />
      <Header />

      {/* ── HERO: SURROUNDING 3D PRODUCTS WITH CENTERED MAIN INFO ── */}
      <section className="hero">
        {/* Full-screen 3D Stage with Surrounding Orbiting Valves */}
        <div className="hero-3d-bg" aria-hidden="true">
          <Valve3DModel />
        </div>

        {/* Centered Main Information */}
        <div className="hero-center-content">
          <div className="section-kicker hero-kicker">/01 <span>Precision Engineering</span></div>
          
          <h1 className="hero-center-title">
            <span className="hero-title-top">Integrated Manufacturing</span>
            <span className="hero-banner-accent">Engineering Components</span>
            <span className="hero-title-bottom">
              Built around <span className="hero-title-accent">precision.</span>
            </span>
          </h1>

          <p className="hero-center-summary hero-summary-desktop">
            Established in 1986 in Bengaluru — combining cold forging, heat treatment,
            CNC machining, tooling and quality inspection for demanding component programs.
          </p>
          <p className="hero-center-summary hero-summary-mobile">
            Integrated manufacturing for precision components in Bengaluru.
          </p>

          <div className="hero-cta-wrap">
            <Link href="/products" className="button button-accent hero-button">
              Explore our capabilities <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Minimalistic Metallic Scroll Down Indicator */}
        <button
          type="button"
          onClick={() => {
            const intro = document.querySelector(".intro");
            if (intro) {
              intro.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hero-scroll-indicator"
          aria-label="Scroll down to Who We Are section"
        >
          <div className="hero-scroll-pill">
            <span className="hero-scroll-bead" />
          </div>
          <span className="hero-scroll-label">Scroll</span>
          <ChevronDown size={13} className="hero-scroll-chevron" />
        </button>
      </section>

      {/* ── INTRO ── */}
      <section className="intro section-pad">
        <div className="section-kicker">/02 <span>WHO WE ARE</span></div>
        <div className="intro-grid">
          <Reveal>
            <h2>Precision manufacturing with an <em>uncompromising standard.</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              SAAB Engineering is a Bengaluru-based automotive and engineering-component
              manufacturer established in 1986. We combine forming, heat treatment,
              precision machining, tooling and inspection under one manufacturing system.
            </p>
            <Link href="/about" className="text-link">
              Our history <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
        <AnimatedStats
          ariaLabel="SAAB Engineering Key Specifications"
          stats={[
            { value: 1986, suffix: "",   label: "Established in Bengaluru",  nearStart: true },
            { value: 1500, suffix: "T",  label: "Largest listed press" },
            { value: 550,   suffix: "+",  label: "Skilled workforce" },
            { value: 4,    suffix: "",  label: "Manufacturing locations" },
          ]}
        />
      </section>

      {/* ── WHY SAAB ENGINEERING ── */}
      <section className="dark-band">
        <div className="section-kicker">/03 <span>WHY SAAB ENGINEERING</span></div>
        <div className="split-feature">
          <Reveal>
            <h2>Made for<br /><span>precision.</span></h2>
            <p>
              From cold forging to final inspection, our integrated manufacturing
              system is designed for accuracy, consistency and delivery.
            </p>
            <Link href="/about" className="text-link">
              Our capabilities <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.12} className="feature-image">
            <Image
              src="/images/feature-machined.webp"
              alt="Precision-machined engineering component on workshop bench"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="products-section section-pad">
        <div className="section-kicker">/04 <span>OUR CAPABILITIES</span></div>
        <div className="section-heading">
          <h2>One system.<br /><em>Many capabilities.</em></h2>
          <p>
            From forming and thermal processing to machining, tooling and metrology,
            each capability supports the next stage of production.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <Link href={`/products/${product.slug}`} className="product-card">
                <div className="card-image">
                  <Image
                    src={product.listingImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                </div>
                <div className="card-meta">
                  <span>0{index + 1} / {product.standard}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{product.name}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link href="/products" className="button button-dark">
            View all capabilities <MoveRight size={16} />
        </Link>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="industry-cards-section">
        <div className="industry-cards-head">
          <div className="section-kicker">/05 <span>WHAT WE MAKE POSSIBLE</span></div>
          <h2>Ready for real work.</h2>
          <p>
            Precision component manufacturing for automotive and engineering
            programs that depend on repeatability, quality and delivery.
          </p>
        </div>
        <div className="industry-card-grid">
          {industries.slice(0, 6).map((ind) => (
            <Reveal key={ind.id} delay={0}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </div>
        <div className="industry-cards-cta">
          <Link href="/industries" className="button button-dark">
            View all industries <MoveRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section section-pad">
          <div className="section-kicker">/06 <span>COMMON QUESTIONS</span></div>
        <div className="faq-grid">
          <h2>Clarity is<br /><em>part of the job.</em></h2>
          <div>
            {faqItems.map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <button
                  onClick={() => setFaq(faq === i ? -1 : i)}
                  aria-expanded={faq === i}
                >
                  <span>{q}</span>
                  <ChevronDown className={faq === i ? "rotate" : ""} size={18} />
                </button>
                {faq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="closing">
        <div className="closing-inner">
          <div className="section-kicker closing-kicker">/07 <span>START A CONVERSATION</span></div>
          <h2>Bring us your<br /><span>next requirement.</span></h2>
          <Link href="/contact" className="button button-accent">
            Talk to an engineer <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="wordmark">SAAB</div>
      </section>
    </main>
  );
}
