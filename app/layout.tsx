import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/app/NavBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', "800", "900"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Dev Track - Track issues with your devs",
  description: "The best place to track issues with your devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <main className={`${poppins.variable}`}>
            <NavBar />
            <section className="max-w-7xl mx-auto">
              {children}
            </section>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}