import React from "react";
import "./globals.css";

export const metadata = {
  title: "Sandip Bhattacharya | UI/UX Designer Portfolio",
  description:
    "UI/UX Designer and developer portfolio — Figma, Next.js, React, and modern web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
