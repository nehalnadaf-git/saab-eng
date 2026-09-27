import Header from "@/components/Header";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SAAB Engineering",
  description: "Privacy policy for SAAB Engineering, Bengaluru, Karnataka, India.",
};

export default function PrivacyPage() {
  return (
    <main className="inner-page">
      <Header />

      {/* ── HERO ── */}
      <div className="inner-hero">
        <p className="eyebrow">/01 / LEGAL & COMPLIANCE</p>
        <h1>
          Your data,<br />
          <span>respected.</span>
        </h1>
        <p>Our commitment to handling technical enquiries and customer information responsibly.</p>
      </div>

      {/* ── POLICY CONTENT ── */}
      <section className="section-pad policy-section">
        <div className="policy-container">
          <div className="policy-block">
            <div className="section-kicker">/02 <span>INFORMATION USAGE</span></div>
            <h2>Information Collection & Scope</h2>
            <p className="lead">
              SAAB Engineering collects project requirements, contact details, resumes and company
              information submitted through our enquiry and careers forms solely for direct business communication.
            </p>
            <p>
              We do not sell, rent, or lease personal information to third parties. All technical
              drawings, media specifications, and operating parameters shared with our engineering
              team in Bengaluru are treated as strictly confidential commercial information.
            </p>
          </div>

          <div className="policy-block">
            <div className="section-kicker">/03 <span>COMMUNICATION & DATA SECURITY</span></div>
            <h2>Contact & Direct Enquiries</h2>
            <p>
              When you submit an enquiry, our management and engineering team uses the provided contact
              details to understand manufacturing requirements and deliver commercial proposals.
            </p>
            <p>
              Questions regarding data handling or requests to remove your contact information from our
              records can be directed to:
            </p>
            <div className="policy-contact-card">
              <strong>SAAB Engineering</strong>
              <p>B 41/42, KSSIDC Industrial Estate, Bommasandra, Bengaluru – 560099, Karnataka, India</p>
              <p>Partner: <a href="mailto:sanjiv@saabengg.com">sanjiv@saabengg.com</a></p>
              <p>General Manager: <a href="mailto:ravikumargn@saabengg.com">ravikumargn@saabengg.com</a></p>
            </div>
          </div>

          <div className="policy-cta">
            <Link href="/contact" className="button button-accent">
              Get in Touch <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="closing">
        <div className="closing-inner">
          <div className="section-kicker closing-kicker">/04 <span>START A CONVERSATION</span></div>
          <h2>
            Bring us your<br />
            <span>next requirement.</span>
          </h2>
          <Link href="/contact" className="button button-dark">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="wordmark">SAAB</div>
      </section>
    </main>
  );
}