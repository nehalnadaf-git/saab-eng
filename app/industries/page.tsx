import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Facilities & Applications | SAAB Engineering",
  description:
    "Explore SAAB Engineering facilities and applications across automotive components, CNC machining, cold forging, heat treatment, quality inspection and production monitoring.",
};

export default function IndustriesPage() {
  return (
    <main className="inner-page">
      <Header />

      {/* ── HERO ── */}
      <div className="inner-hero">
        <p className="eyebrow">/01 / APPLICATIONS</p>
        <h1>
          Capabilities<br />
          <span>we connect.</span>
        </h1>
        <p>
          From cold forging and heat treatment to CNC machining, tooling, metrology
          and production monitoring, our capabilities support demanding component programs.
        </p>
      </div>

      {/* ── ALL INDUSTRIES — zigzag alternating layout ── */}
      <section className="ind-all-section" id="industries-list">
        <div className="ind-all-inner">
          {industries.map((ind, index) => (
            <div id={ind.id} key={ind.id} className={`ind-row${index % 2 !== 0 ? " ind-row--reverse" : ""}`}>

              {/* Image */}
              <div className="ind-row-image-wrap">
                <Image
                  src={ind.image}
                  alt={`${ind.name} — SAAB Engineering capability`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="ind-row-content">
                <h2 className="ind-row-title">{ind.name}</h2>
                <p className="ind-row-desc">{ind.description}</p>
                <ul className="ind-row-features">
                  {ind.features.map((f) => (
                    <li key={f}>
                      <span className="ind-row-check" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                  className="button button-dark"
                >
                  Get a Quote <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="closing">
        <div className="closing-inner">
          <div className="section-kicker closing-kicker">/02 <span>START A CONVERSATION</span></div>
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