import Container from "@/components/ui/container";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleContextProvider from "@/context/ArticleContext";

export const metadata: Metadata = {
  title: "Портфолио Begov Nazim",
  description: "Работы веб-разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/logos/FyrreMagazineFavicon.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <ArticleContextProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ArticleContextProvider>
      </body>
    </html>
  );
}
