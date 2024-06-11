import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './Global.css'
import Footer from './Footer/page'
import Header from './Header/page'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocean"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
