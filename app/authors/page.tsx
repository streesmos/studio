import AuthorsList from "@/components/AuthorList";
import PageTitle from "@/components/PageTitle";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Авторы",
  description: "Наши авторы",
};

export default function AuthorsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Authors.svg"
        imgAlt="Надпись 'Author'"
      >
        Авторы
      </PageTitle>
      <Suspense fallback={<Loading />}>
        <AuthorsList />
      </Suspense>
    </main>
  );
}
