import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import { Header } from "@/components/Organisms/Header";
import { Footer } from "@/components/Organisms/Footer";
 
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex flex-col` }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
