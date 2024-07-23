import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boycott for Pakistan",
  description:
    "Join the movement to boycott IPP groups in Pakistan. Learn about the predatory practices of these groups and take action to ensure fairness in our energy sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-V05ZGXERXJ" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
