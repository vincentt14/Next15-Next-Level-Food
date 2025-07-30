import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS Course App",
  description: "Next Level Food App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
