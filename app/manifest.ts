import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "SAAB Engineering", short_name: "SAAB", description: "Precision automotive and engineering-component manufacturing.", start_url: "/", display: "standalone", background_color: "#f4f1eb", theme_color: "#1f4e79", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}