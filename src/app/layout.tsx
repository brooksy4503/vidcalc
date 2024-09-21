import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://astounding-salmiakki-dd3625.netlify.app/"),
  title: "Video Duration Calculator",
  description: "Calculate the duration of your videos",
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Video Duration Calculator",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
