import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R.I.S.E. | Reposition. Insure. Secure. Empower.",
  description:
    "Financial education and retirement, income-protection, tax-advantaged, and legacy strategies with Pamala Yvonne Burch.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="demo-shell demo-rise-with-pamala">{children}</body>
    </html>
  );
}
