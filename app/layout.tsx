import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saabengg.com"),
  title: {
    default: "SAAB Engineering | Precision Engineering Components",
    template: "%s | SAAB Engineering",
  },
  description:
    "Bengaluru-based automotive and engineering-component manufacturer specialising in CNC machining, cold forging, heat treatment and precision quality inspection.",
  keywords: ["SAAB Engineering", "CNC machining", "cold forging", "heat treatment", "automotive components", "Bengaluru engineering manufacturer"],
  openGraph: {
    title: "SAAB Engineering | Precision Engineering Components",
    description: "Integrated manufacturing for precision automotive and engineering components.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAB Engineering",
    description: "Precision automotive and engineering-component manufacturing in Bengaluru.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "SAAB Engineering" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(regs => {
                for (const r of regs) r.unregister();
              });
              if ('caches' in window) {
                caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
              }
            }`,
          }}
        />
      </body>
    </html>
  );
}
