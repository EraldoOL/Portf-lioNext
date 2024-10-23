
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import {Roboto} from 'next/font/google';

// Carregar fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

// Configuração do metadata para SEO e head global
export const metadata: Metadata = {
  title: "Meu Portfolio",
  description: "Este é o meu portfolio desenvolvido com Next.js",
  icons: {
    icon: "/favicon.svg", // Adicionando favicon aqui
  },
};

// Layout principal para todas as páginas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
      <header className={`${roboto.className} bg-e-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
      <Link href="/">
      <Image src="/favicon.svg" alt="" width={55} height={55}/>
      </Link>
      
      <nav className="hidden md:flex items-center gap-10 text-md">
      <Link href="/">Sobre mim</Link>
      {/*<Link href="/">Portfolio</Link>*/}
      <Link href="/contatos">Contato</Link>
      </nav>
      
      </header>
      
      
        <main>{children}</main> {/* Renderiza o conteúdo das páginas */}
      </body>
    </html>
  );
}