"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "History", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Facilities", href: "/industries" },
  { label: "Workforce", href: "/about#workforce" },
  { label: "PL Monitor", href: "/about#pl-monitor" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and listen for Escape key when drawer is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="SAAB Engineering Home">
          <Logo variant="horizontal" size={28} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <div className="nav-center">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/products">Products</Link>
            <Link href="/industries">Industries</Link>
          </div>
          <Link href="/contact" className="nav-cta">
            GET A QUOTE <ArrowUpRight size={14} />
          </Link>
        </nav>

        {/* Mobile Header Actions: Hamburger button only */}
        <div className="mobile-header-actions">
          <button
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE SLIDE-OUT DRAWER ── */}
      <div
        className={`mobile-drawer-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`mobile-drawer ${open ? "open" : ""}`}
        aria-label="Mobile Navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Top Header: Logo + Close X */}
        <div className="mobile-drawer-header">
            <Link href="/" onClick={() => setOpen(false)} aria-label="SAAB Engineering Home">
            <Logo variant="horizontal" size={26} />
          </Link>
          <button
            className="mobile-drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links List with Dividers and Active Indicator */}
        <nav className="mobile-drawer-nav">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]));

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mobile-drawer-link ${isActive ? "active" : ""}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="mobile-drawer-dot" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer with Prominent 'Get a Free Quote' Button */}
        <div className="mobile-drawer-footer">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mobile-drawer-cta"
          >
            Get a Free Quote
          </Link>
          <p className="mobile-drawer-meta">
            Bengaluru, Karnataka • Precision Engineering Components
          </p>
        </div>
      </aside>
    </>
  );
}

