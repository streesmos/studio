import Container from "@/components/ui/container";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PodcastContextProvider from "@/context/PodcastContext";
import ArticleContextProvider from "@/context/ArticleContext";

export const metadata: Metadata = {
  title: "Портфолио Бегова Назима",
  description: "Работы веб‑разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/logos/FyrreMagazineFavicon.svg"
          type="image/x-icon"
        />
        <link rel="canonical" href="https://fyrre-magazine.vercel.app/" />
      </head>
      <body>
        <ArticleContextProvider>
          <PodcastContextProvider>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </PodcastContextProvider>
        </ArticleContextProvider>
      </body>
    </html>
  );
}
