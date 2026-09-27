import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer-bumi">
      {/* Background ambient lighting and subtle organic waves */}
      <div className="footer-ambient-glow" aria-hidden="true" />
      <div className="footer-waves-bg" aria-hidden="true">
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 400C300 340 450 140 800 110V400H100Z" fill="url(#wave1)" />
          <path d="M0 400C250 310 500 190 800 170V400H0Z" fill="url(#wave2)" />
          <path d="M200 400C400 350 550 250 800 230V400H200Z" fill="url(#wave3)" />
          <defs>
            <linearGradient id="wave1" x1="450" y1="110" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.06)" />
              <stop offset="1" stopColor="rgba(255, 255, 255, 0.01)" />
            </linearGradient>
            <linearGradient id="wave2" x1="400" y1="170" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.04)" />
              <stop offset="1" stopColor="rgba(255, 255, 255, 0.005)" />
            </linearGradient>
            <linearGradient id="wave3" x1="500" y1="230" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.03)" />
              <stop offset="1" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-content-wrap">
        {/* Main 2-Column Split matching reference */}
        <div className="footer-main-grid">
          {/* Left Column: Brand, Headline, Summary, Social Buttons */}
          <div className="footer-left-col">
            <Link href="/" className="footer-brand" aria-label="SAAB Engineering Home">
              <Logo variant="horizontal" theme="white" size={32} />
            </Link>

            <h2 className="footer-hero-title">
              Precision in every<br />
              component
            </h2>

            <p className="footer-hero-desc">
              Integrated automotive and engineering-component manufacturing through
              cold forging, heat treatment, CNC machining and quality inspection.
            </p>


          </div>

          {/* Right Column: Address, Contact, 3-Column Navigation */}
          <div className="footer-right-col">
            {/* Top Bar inside right column */}
            <div className="footer-top-meta">
              <span className="footer-address">
                Bengaluru, Karnataka, India
              </span>
              <a href="mailto:sanjiv@saabengg.com" className="footer-meta-email">
                sanjiv@saabengg.com
              </a>
            </div>

            {/* 3 Nav Columns matching SOLUTIONS / INDUSTRIES / COMPANY in reference */}
            <div className="footer-nav-columns">
              <div className="footer-col">
                <h3 className="footer-col-heading">SOLUTIONS</h3>
                <ul className="footer-link-list">
                    <li><Link href="/products/cnc-machining">CNC Machining</Link></li>
                    <li><Link href="/products/cold-forging">Cold Forging</Link></li>
                    <li><Link href="/products/heat-treatment">Heat Treatment</Link></li>
                    <li><Link href="/products/tool-room">Tool Room</Link></li>
                    <li><Link href="/products/quality-inspection">Quality Inspection</Link></li>
                    <li><Link href="/products/pl-monitor">PL Monitor</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h3 className="footer-col-heading">INDUSTRIES</h3>
                <ul className="footer-link-list">
                    <li><Link href="/industries#automotive">Automotive Components</Link></li>
                    <li><Link href="/industries#precision-machining">Precision Machining</Link></li>
                    <li><Link href="/industries#cold-forging">Cold Forging</Link></li>
                    <li><Link href="/industries#heat-treatment">Heat Treatment</Link></li>
                    <li><Link href="/industries#quality">Quality &amp; Metrology</Link></li>
                    <li><Link href="/industries#engineering-components">Engineering Components</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h3 className="footer-col-heading">COMPANY</h3>
                <ul className="footer-link-list">
                    <li><Link href="/about">Company History</Link></li>
                    <li><Link href="/industries">Facilities</Link></li>
                    <li><Link href="/about#workforce">Workforce</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><a href="mailto:pradeepmv@saabengg.com">Careers</a></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy Policy, Email Link */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            © 2026 SAAB Engineering. All Rights Reserved.
          </div>
          <div className="footer-bottom-right">
            <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <a href="mailto:ravikumargn@saabengg.com" className="footer-bottom-link">ravikumargn@saabengg.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
