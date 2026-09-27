"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name    = (data.get("name")    as string) || "";
    const company = (data.get("company") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject = encodeURIComponent(`SAAB Engineering enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\n\nRequirement:\n${message}`);
    window.location.href = `mailto:sanjiv@saabengg.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="inner-page">
      <Header />

      {/* ── HERO ── */}
      <div className="inner-hero">
        <p className="eyebrow">/01 / CONTACT</p>
        <h1>Let&apos;s move<br /><span>flow forward.</span></h1>
        <p>Tell us about your manufacturing requirement and our team will respond during business hours.</p>
      </div>

      {/* ── CONTACT GRID ── */}
      <section className="section-pad detail-grid">
        {/* Left — contact info */}
        <div>
          <div className="section-kicker">/ <span>GET IN TOUCH</span></div>
          <h2>Bring us your<br /><em>next requirement.</em></h2>
          <p className="lead" style={{ marginTop: "32px" }}>
            SAAB Engineering Unit 1: B 41/42, KSSIDC Industrial Estate,<br />
            Bommasandra, Bengaluru – 560099, Karnataka, India.
          </p>
          <p className="lead" style={{ marginTop: "20px" }}>
            <a href="mailto:sanjiv@saabengg.com">sanjiv@saabengg.com</a><br />
            <a href="mailto:ravikumargn@saabengg.com">ravikumargn@saabengg.com</a>
          </p>
          <p style={{ marginTop: "16px", fontSize: "13px", color: "var(--muted)" }}>
            Business hours: 9:30 AM – 6:30 PM IST, Mon–Sat
          </p>

          <p className="lead" style={{ marginTop: "32px" }}>
            Sanjiv Balagopal, Partner<br />
            Ravikumar G.N., General Manager
          </p>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="success">
              <p className="eyebrow">OPENING WHATSAPP</p>
              <h2>Your enquiry<br /><em>is ready.</em></h2>
              <p>
                Your enquiry has been recorded for follow-up by our engineering team.
              </p>
              <Link href="/" className="text-link" style={{ marginTop: "24px" }}>
                Back to home <ArrowUpRight size={16} />
              </Link>
            </div>
          ) : (
            <form className="quote-form" onSubmit={submit}>
              <label>
                Name
                <input required name="name" placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Work email (optional)
                <input type="email" name="email" placeholder="you@company.com" autoComplete="email" />
              </label>
              <label>
                Company (optional)
                <input name="company" placeholder="Your company" autoComplete="organization" />
              </label>
              <label>
                Tell us about your application
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Media, size, pressure, temperature, flow rate..."
                />
              </label>
              <button className="button button-accent" type="submit">
                Send enquiry <ArrowUpRight size={16} />
              </button>
              <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "10px" }}>
                Your information is used only to respond to this enquiry.
              </p>
            </form>
          )}
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
          <Link href="/contact" className="button button-dark">
            Talk to an engineer <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="wordmark">SAAB</div>
      </section>
    </main>
  );
}