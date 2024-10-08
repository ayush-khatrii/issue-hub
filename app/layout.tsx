import "./globals.css";
import { Poppins } from "next/font/google"
import NavBar from "@/app/NavBar";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/app/providers";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', "800", "900"],
  variable: '--font-poppins',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={`${poppins.variable}`}
        suppressHydrationWarning>
        <body>
          <Providers>
            <Toaster />
            <main>
              <NavBar />
              <section className="max-w-7xl mx-auto">
                {children}
              </section>
            </main>
          </Providers>
        </body>
      </html>
    </>
  );
}