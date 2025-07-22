import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export const metadata = {
  title: "Страница не найдена",
  description: "Страница не существует",
};

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <div>
        <PageTitle
          className="sr-only"
          imgSrc="/images/titles/NotFound.svg"
          imgAlt="Надпись 'Not Found'"
        >
          Не найдено
        </PageTitle>
        <h2>
          Страница не найдена. Нажмите{" "}
          <Link className="font-semibold" href="/">
            здесь, чтобы вернуться на главную
          </Link>
        </h2>
      </div>
    </main>
  );
}
