import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import AnimatedStats from "@/components/AnimatedStats";

export const metadata = {
  title: "History & Capabilities | SAAB Engineering",
  description:
    "Learn about SAAB Engineering, established in 1986 in Bengaluru and built around cold forging, heat treatment, CNC machining, tooling and quality inspection.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <Header />

      {/* ── HERO: CONSISTENT INNER-HERO ACROSS PRODUCTS, INDUSTRIES & ABOUT ── */}
      <div className="inner-hero">
        <p className="eyebrow">/01 / WHO WE ARE</p>
        <h1>
          Built around<br />
          <span>precision.</span>
        </h1>
        <p>
          Established in 1986 in Bengaluru, SAAB Engineering manufactures automotive and
          engineering components through integrated cold forging, heat treatment, CNC machining,
          tooling and quality inspection.
        </p>
      </div>

      {/* ── ORIGIN & STORY ── */}
      <section className="section-pad about-story-section">
        <div className="section-kicker">/02 <span>OUR ORIGIN & MISSION</span></div>
        <div className="about-story-grid">
          <div className="about-story-content">
            <h2>
              Manufacturing built with<br />
              <span className="accent-word">discipline & precision.</span>
            </h2>
            <p className="lead">
              SAAB Engineering was established by Ajay Balagopal in 1986, beginning with conventional
              lathes and second-operation capstan lathes. Sanjiv Balagopal joined in 1992 after studying
              metallurgy at PSG Tech and working at Tafe and Billforge Pvt. Ltd.
            </p>
            <p>
              The company was among the early small-scale industries to adopt CNC turning machines.
              In 2002, it established a cold-forging unit in Bommasandra to meet demand for forged and
              machined components, later integrating heat treatment and machining capabilities.
            </p>
            <p>
              Together with sister concern Savin CNC Engineering, the business operates manufacturing
              facilities in Bommasandra and Jigani, serving automotive and engineering-component programs.
            </p>
            <div className="about-story-cta">
              <Link href="/products" className="text-link">
                Explore our capabilities <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="about-story-media">
            <div className="about-story-image-card">
              <Image
                src="/images/about-facility.webp"
                alt="SAAB Engineering manufacturing facility in Bengaluru"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                priority
              />
              <div className="about-story-badge">
                <span className="about-badge-dot" aria-hidden="true" />
                <span className="about-badge-text">
                  Bommasandra • Bengaluru, Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── KEY PERFORMANCE METRICS ── */}
        <AnimatedStats
          ariaLabel="SAAB Engineering Key Metrics"
          stats={[
            { value: 1986, suffix: "",      label: "Established in Bengaluru",         nearStart: true },
            { value: 2002, suffix: "",      label: "Cold forging established" },
            { value: 550,  suffix: "+",     label: "Skilled workforce" },
            { value: 4,    suffix: "",      label: "Manufacturing locations" },
          ]}
        />
      </section>

      {/* ── FACILITY & TESTING INFRASTRUCTURE ── */}
      <section className="section-pad about-facility-section">
        <div className="about-section-head">
          <div className="section-kicker">/03 <span>FACILITY & INFRASTRUCTURE</span></div>
          <h2>
            Where precision<br />
            <em>becomes production.</em>
          </h2>
          <p>
            From cold forging and heat treatment to CNC machining, tooling and final inspection,
            SAAB Engineering presents an integrated manufacturing system designed for quality,
            delivery and technological competitiveness.
          </p>
        </div>

        <div className="about-facility-grid">
          <div className="about-facility-card">
            <div className="about-facility-thumb">
              <Image
                src="/images/feature-machined.webp"
                alt="Precision CNC machined engineering component"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-facility-info">
              <span className="about-facility-tag">01 / MACHINING</span>
              <h3 className="about-facility-title">CNC Machining</h3>
              <p className="about-facility-desc">
                CNC turning centres, VMC, polygon milling, Muratech CNC turning and CNC cutting,
                with equipment updated for accuracy and delivery performance.
              </p>
            </div>
          </div>

          <div className="about-facility-card">
            <div className="about-facility-thumb">
              <Image
                src="/images/about-exploded-parts.webp"
                alt="Forged and machined engineering components"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-facility-info">
              <span className="about-facility-tag">02 / LININGS & SEALS</span>
              <h3 className="about-facility-title">Cold Forging</h3>
              <p className="about-facility-desc">
                Hydraulic and mechanical presses ranging from 160 to 1500 tons, integrated with
                downstream machining and production tooling.
              </p>
            </div>
          </div>

          <div className="about-facility-card">
            <div className="about-facility-thumb">
              <Image
                src="/images/about-facility-2.webp"
                alt="Manufacturing benches for component production"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-facility-info">
              <span className="about-facility-tag">03 / ASSEMBLY</span>
              <h3 className="about-facility-title">Heat Treatment</h3>
              <p className="about-facility-desc">
                Two sealed quench furnaces with 1.2 tonnes total capacity, plus washing, tempering
                and annealing equipment.
              </p>
            </div>
          </div>

          <div className="about-facility-card">
            <div className="about-facility-thumb">
              <Image
                src="/images/about-facility-3.webp"
                alt="Components staged for quality inspection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-facility-info">
              <span className="about-facility-tag">04 / QUALITY ASSURANCE</span>
              <h3 className="about-facility-title">Quality & Metrology</h3>
              <p className="about-facility-desc">
                CMM, roundness, gear and profile testing, Magnaflux magnetic-particle inspection and
                dynamic balancing support the quality-assurance system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ── */}
      <section className="section-pad about-principles-section">
        <div className="about-section-head">
            <div className="section-kicker">/04 <span>CORE PRINCIPLES</span></div>
          <h2>
            Systems that<br />
            <em>support every build.</em>
          </h2>
          <p>
            Our manufacturing decisions are grounded in precision, quality assurance, technological
            competitiveness and the skills of our people.
          </p>
        </div>

        <div className="about-principles-grid">
          <div className="about-principle-card">
            <span className="about-principle-num">01</span>
            <h3 className="about-principle-title">Integrated Manufacturing</h3>
            <p className="about-principle-desc">
              Cold forging, heat treatment, CNC machining and tooling are connected as one production
              system for automotive and engineering components.
            </p>
          </div>

          <div className="about-principle-card">
            <span className="about-principle-num">02</span>
            <h3 className="about-principle-title">Quality Assurance</h3>
            <p className="about-principle-desc">
              ISO/TS 16949 certification is stated by the company, supported by standards-room
              measurement and testing equipment.
            </p>
          </div>

          <div className="about-principle-card">
            <span className="about-principle-num">03</span>
            <h3 className="about-principle-title">People & Improvement</h3>
            <p className="about-principle-desc">
              The company states a workforce of more than 550 skilled people, regular in-house and
              external training, and membership in the CII-Bosch Cluster.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad about-principles-section" id="workforce">
        <div className="about-section-head">
          <div className="section-kicker">/05 <span>WORKFORCE & PL MONITOR</span></div>
          <h2>People and data<br /><em>on the shop floor.</em></h2>
          <p>SAAB Engineering states a workforce of 550+ skilled people, with managerial, supervisory and skilled-operator roles supported by regular training.</p>
        </div>
        <div className="about-principles-grid" id="pl-monitor">
          <div className="about-principle-card"><span className="about-principle-num">15%</span><h3 className="about-principle-title">Managerial Staff</h3><p className="about-principle-desc">The published workforce breakdown identifies managerial staff as 15% of the workforce.</p></div>
          <div className="about-principle-card"><span className="about-principle-num">18%</span><h3 className="about-principle-title">Supervisory Staff</h3><p className="about-principle-desc">Supervisory staff represent 18% in the published workforce breakdown.</p></div>
          <div className="about-principle-card"><span className="about-principle-num">67%</span><h3 className="about-principle-title">Skilled Operators</h3><p className="about-principle-desc">PL Monitor connects machines to a central computer for live status, charts and management information.</p></div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="closing">
        <div className="closing-inner">
          <div className="section-kicker closing-kicker">/06 <span>START A CONVERSATION</span></div>
          <h2>
            Bring us your<br />
            <span>next requirement.</span>
          </h2>
          <Link href="/contact" className="button button-accent">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="wordmark">SAAB</div>
      </section>
    </main>
  );
}