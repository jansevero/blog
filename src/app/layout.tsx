import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Este um blog com Next.js",
  description: "Esta é a descrição desta página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body>{children}</body>
    </html>
  );
}
