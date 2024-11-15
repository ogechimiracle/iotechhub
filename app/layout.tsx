import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import PageTransition from "@/components/pageTransition";
import StairEffect from "@/components/stairEffect";
import Footer from "@/components/footer";



const jetBrains = JetBrains_Mono({ 
  subsets: ["latin"] ,
  weight: ["100","200","300","400","600","700","800"],
  variable: "--font-jetBrains"
});

export const metadata: Metadata = {
  title: "IO-TechHub",
  description: "Software Development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.variable}>
        <div className="relative container mx-auto md:px-16 px-5">
        <Navbar/>
        </div>
        <StairEffect />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer/>
        </body>
    </html>
  );
}
