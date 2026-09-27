import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import Header from "@/components/Header";

export const metadata = {
  title: "Capabilities",
  description:
    "Explore SAAB Engineering capabilities in CNC machining, cold forging, heat treatment, tooling, quality inspection and PL Monitor.",
};

export default function ProductsPage() {
  return (
    <main className="inner-page">
      <Header />

      {/* ── HERO ── */}
      <div className="inner-hero">
        <p className="eyebrow">/01 / CAPABILITIES</p>
        <h1>Make the<br /><span>component.</span></h1>
        <p>Integrated manufacturing for automotive and engineering components.</p>
      </div>

      {/* ── PRODUCT LIST ── */}
      <section className="section-pad">
        <div className="product-list">
          {products.map((product, index) => (
            <Link className="product-row" href={`/products/${product.slug}`} key={product.slug}>
              <span className="row-number">0{index + 1}</span>
              {product.listingImage && (
                <div className="row-thumb">
                  <Image
                    src={product.listingImage}
                    alt={product.name}
                    fill
                    sizes="80px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <h2>{product.name}</h2>
              <p>{product.intro}</p>
              <ArrowUpRight size={18} />
            </Link>
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