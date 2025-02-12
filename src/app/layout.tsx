import type { Metadata } from "next";
import "@/globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Portfolio Vinícius",
  description: "This is my personal portfolio, where I showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
