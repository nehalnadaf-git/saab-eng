import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IndustryItem } from "@/lib/industries";

export default function IndustryCard({ industry }: { industry: IndustryItem }) {
  return (
    <Link href={industry.href} className="industry-card" aria-label={industry.name}>
      {/* ── IMAGE ── */}
      <div className="industry-card-image">
        <Image
          src={industry.image}
          alt={`${industry.name} — SAAB Engineering capability`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* ── BODY ── */}
      <div className="industry-card-body">
        <h3 className="industry-card-title">{industry.name}</h3>
        <p className="industry-card-desc">{industry.description}</p>
        <span className="industry-card-link">
          Learn More <ArrowUpRight size={15} className="industry-card-arrow" />
        </span>
      </div>
    </Link>
  );
}

