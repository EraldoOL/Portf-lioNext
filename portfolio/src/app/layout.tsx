
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

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
      
      <header>
      <Link href="/">
      <Image scr="/favicon.svg" alt="" width={200} height={200}/>
      </Link>
      
      <nav>
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