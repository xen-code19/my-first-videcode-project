import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Designer & Developer",
  description:
    "The portfolio of Alex Morgan, a multidisciplinary designer and developer creating thoughtful digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
