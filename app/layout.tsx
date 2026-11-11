import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eniel Abacan — Multidisciplinary Creative",
  description:
    "The portfolio of Eniel Abacan—software engineer, video editor, web developer, data analyst, and content creator.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
