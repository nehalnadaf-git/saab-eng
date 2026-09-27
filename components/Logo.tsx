import React from "react";

export interface LogoProps {
  /** Display format: 'horizontal' (mark + wordmark), 'mark' (icon only), or 'stacked' */
  variant?: "horizontal" | "mark" | "stacked";
  /** Color theme */
  theme?: "color" | "white" | "dark" | "monochrome";
  /** Mark size in pixels */
  size?: number;
  /** Optional custom class name */
  className?: string;
  /** Subtitle to show under SAAB (defaults to "ENGINEERING", set to false to hide) */
  subtitle?: string | false;
}

export default function Logo({
  variant = "horizontal",
  theme = "color",
  size,
  className = "",
  subtitle = "ENGINEERING",
}: LogoProps) {
  // Determine fill colors based on theme
  const isWhite = theme === "white";
  const isMono = theme === "monochrome";

  const upperFill = isWhite ? "#ffffff" : isMono ? "currentColor" : "#0f2b48";
  const lowerFill = isWhite ? "#38bdf8" : isMono ? "currentColor" : "#0284c7";
  const textColor = isWhite ? "#ffffff" : "var(--ink, #111827)";
  const subColor = isWhite ? "#38bdf8" : "#1f4e79";

  const defaultMarkSize = variant === "mark" ? (size || 36) : variant === "stacked" ? (size || 64) : (size || 32);

  // Precision vector geometry for Option A: The Precision Forged Billet (Interlocking Dies)
  // Two 180° rotational-symmetric machined billets with 45° precision chamfers and exact clearance
  const mark = (
    <svg
      width={defaultMarkSize}
      height={defaultMarkSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-mark"
      aria-hidden="true"
      style={{ flexShrink: 0, display: "block" }}
    >
      {/* Upper Segment: Deep Steel Billet */}
      <path
        d="M 18,16 L 82,16 C 88,16 92,20 92,26 L 92,44 C 92,48 89,51 85,53 L 64,63 L 52,51 L 72,41 L 72,34 L 18,34 Z"
        fill={upperFill}
      />
      {/* Lower Segment: Precision Cobalt Billet */}
      <path
        d="M 82,84 L 18,84 C 12,84 8,80 8,74 L 8,56 C 8,52 11,49 15,47 L 36,37 L 48,49 L 28,59 L 28,66 L 82,66 Z"
        fill={lowerFill}
      />
    </svg>
  );

  if (variant === "mark") {
    return (
      <span className={`inline-flex items-center justify-center ${className}`} aria-label="SAAB Engineering">
        {mark}
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <div
        className={`logo-lockup-stacked ${className}`}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "14px",
        }}
      >
        {mark}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <span
            style={{
              fontFamily: "var(--f-body, sans-serif)",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.28em",
              lineHeight: 1.1,
              color: textColor,
              textTransform: "uppercase",
              paddingLeft: "0.28em", // optical centering for tracked caps
            }}
          >
            SAAB
          </span>
          {subtitle && (
            <span
              style={{
                fontFamily: "var(--f-body, sans-serif)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.36em",
                color: subColor,
                textTransform: "uppercase",
                paddingLeft: "0.36em",
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup
  return (
    <div
      className={`logo-lockup ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        lineHeight: 1,
      }}
    >
      {mark}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--f-body, sans-serif)",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.1em",
            lineHeight: 1.05,
            color: textColor,
            textTransform: "uppercase",
          }}
        >
            SAAB
        </span>
        {subtitle && (
          <span
            style={{
              fontFamily: "var(--f-body, sans-serif)",
              fontSize: "8.5px",
              fontWeight: 600,
              letterSpacing: "0.24em",
              lineHeight: 1,
              color: subColor,
              textTransform: "uppercase",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
