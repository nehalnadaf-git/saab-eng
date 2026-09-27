import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Header from "@/components/Header";


export async function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product?.name ?? "Product",
    description: product?.intro,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  // Split name for accent word styling
  const nameWords = product.name.split(" ");
  const leadName = nameWords.slice(0, -1).join(" ");
  const accentWord = nameWords.slice(-1)[0];

  return (
    <main className="inner-page product-detail">
      <Header />

      {/* ── HERO: ARCHITECTURAL 2-COLUMN LIGHT HERO ── */}
      <div className="inner-hero product-hero">
        <div className="product-hero-grid">
          <div className="product-hero-info">
            <p className="eyebrow">/01 / CAPABILITIES / {product.standard}</p>
            <h1>
              {leadName ? (
                <>
                  {leadName}<br />
                  <span>{accentWord}</span>
                </>
              ) : (
                <span>{accentWord}</span>
              )}
            </h1>
            <p className="product-hero-lead">{product.intro}</p>
            <div className="product-hero-actions">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="button button-accent"
              >
                Get a Quote <ArrowUpRight size={16} />
              </Link>
              <a href="#specification" className="button button-dark">
                Specifications <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {product.heroImage && (
            <div className="product-hero-media">
              <div className="product-hero-card">
                <Image
                  src={product.heroImage}
                  alt={`${product.name} industrial installation`}
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="product-hero-badge">
                  <span className="product-badge-dot" aria-hidden="true" />
                  <span>{product.standard} • 100% Tested</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── DETAIL & SPECIFICATION ── */}
      <section id="specification" className="section-pad detail-grid">
        <div>
          <div className="section-kicker">/02 <span>TECHNICAL SPECIFICATIONS</span></div>
          <h2>Built around<br /><em>your medium.</em></h2>
          {product.specImage && (
            <div className="spec-image">
              <Image
                src={product.specImage}
                alt={`${product.name} specification detail`}
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        <div>
          <p className="lead">
            Our engineering team aligns the manufacturing route, equipment and inspection
            requirements around your component program. Ask for a project-specific recommendation.
          </p>
          <div className="feature-list">
            {product.features.map((feature, index) => (
              <div key={feature}>
                <span>0{index + 1}</span>
                <strong>{feature}</strong>
              </div>
            ))}
          </div>

          {/* Key specs from brochure */}
          <div className="spec-box">
            <span>Design standard</span><strong>{product.standard}</strong>
            {product.specs?.map((s) => (
              <React.Fragment key={s.label}>
                <span>{s.label}</span>
                <strong>{s.value}</strong>
              </React.Fragment>
            ))}
            <span>Documentation</span><strong>Project documentation available on request</strong>
            <span>Testing</span><strong>Quality inspection matched to the component program</strong>
            <span>Manufacturing focus</span><strong>Precision, quality and delivery</strong>
          </div>

          <div className="spec-cta-row">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="button button-accent"
            >
              Request Capability Information <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="product-gallery section-pad">
          <div className="product-gallery-head">
            <div className="section-kicker">/03 <span>GALLERY & INSTALLATIONS</span></div>
            <h2>
              Precision in every detail.<br />
              <em>Field-proven performance.</em>
            </h2>
            <p>
              High-resolution inspection of component surfaces, production details,
              and manufacturing environments.
            </p>
          </div>
          <div className="gallery-grid">
            {product.gallery.map((img) => (
              <div key={img.src} className="gallery-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 700px) 50vw, (max-width: 960px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CLOSING CTA ── */}
      <section className="closing">
        <div className="closing-inner">
          <div className="section-kicker closing-kicker">/04 <span>START A CONVERSATION</span></div>
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