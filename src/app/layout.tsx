import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../../src/app/components/Navbar';
// import Footer from '../../src/app/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arafat Akata - Frontend Engineer",
  description: "Arafat Akata's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
      <Navbar />
        {children}
        
        </body>
      {/* <Footer /> */}
    </html>
  );
}
