import Link from "next/link";

const services = [
  "Разработка сайтов",
  "Дизайн и UX/UI",
  "Фронтенд-разработка",
  "Бэкенд-разработка",
  "Интеграции",
  "SEO и производительность",
  "Хостинг, DevOps и поддержка",
  "Дополнительные услуги",
];

export default function ServicesPreview() {
  return (
    <div className="max-w-[95rem] w-full mx-auto py-8">
      <ul className="list-disc pl-5 space-y-2">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <Link href="/services" className="block mt-4 underline">
        Подробнее об услугах
      </Link>
    </div>
  );
}
