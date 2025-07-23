import PageTitle from "@/components/PageTitle";

const bulletIcon = "/icons/ri_arrow-right-line.svg";

export const metadata = {
  title: "Услуги",
  description: "Услуги веб-разработчика",
};

const services = [
  {
    title: "1. Разработка сайтов",
    items: [
      "Лендинги (Landing Page)",
      "Корпоративные сайты",
      "Интернет-магазины",
      "Многостраничные сайты (каталоги, порталы)",
      "Сайты-визитки",
      "SPA-приложения (Single Page Application)",
      "Административные панели и личные кабинеты",
    ],
  },
  {
    title: "2. Дизайн и UX/UI",
    items: [
      "Прототипирование интерфейсов (Wireframes, UX-сценарии)",
      "Дизайн-макеты (Figma, Adobe XD, Sketch)",
      "Мобильная и десктопная адаптация",
      "UI-анимации (CSS, SVG, Lottie)",
    ],
  },
  {
    title: "3. Фронтенд-разработка",
    items: [
      "Верстка по макетам (HTML5, CSS3, SCSS)",
      "Кроссбраузерность и адаптивность (Media Queries, Flexbox, Grid)",
      "JavaScript и библиотеки: Vanilla JS, jQuery (по требованию)",
      "Фреймворки: React.js, Vue.js, Next.js (SSR и SSG), Nuxt.js",
      "Интерактивные элементы: слайдеры, табы, модальные окна, кастомные формы",
    ],
  },
  {
    title: "4. Бэкенд-разработка",
    items: [
      "Node.js (Express.js, Nest.js)",
      "PHP (Laravel, Yii2, WordPress)",
      "Python (Django, FastAPI)",
      "API: REST API, GraphQL",
      "Базы данных: MySQL, PostgreSQL, MongoDB, Firebase",
      "CMS: WordPress, 1С-Битрикс, Strapi, Sanity, Netlify CMS",
    ],
  },
  {
    title: "5. Интеграции",
    items: [
      "Платежные системы (Stripe, ЮKassa, PayPal)",
      "Онлайн-чаты (JivoSite, Tawk.to, Telegram Bot)",
      "CRM-системы (Bitrix24, amoCRM, МойСклад)",
      "Email-рассылки (Sendinblue, Mailchimp)",
      "Карты (Google Maps, Яндекс.Карты)",
      "Формы и заявки с отправкой на email/Telegram",
    ],
  },
  {
    title: "6. SEO и производительность",
    items: [
      "Базовая SEO-оптимизация (meta, schema.org, robots.txt, sitemap.xml)",
      "Повышение скорости загрузки (Google PageSpeed, lazy loading, image/webp)",
      "Оптимизация и минификация кода",
      "OpenGraph и адаптация для соцсетей",
    ],
  },
  {
    title: "7. Хостинг, DevOps и поддержка",
    items: [
      "Настройка хостинга (VPS, Vercel, Netlify, Timeweb, Jino)",
      "Установка и настройка SSL-сертификатов",
      "Развёртывание и CI/CD (GitHub Actions, Docker)",
      "Поддержка, обновления и мониторинг",
      "Настройка резервного копирования",
    ],
  },
  {
    title: "8. Дополнительные услуги",
    items: [
      "Миграция сайта на новую платформу",
      "Рефакторинг и улучшение кода",
      "Аудит текущего сайта",
      "Автоматизация задач (например, выгрузка товаров из 1С)",
      "Создание Telegram-ботов",
      "Разработка Progressive Web App (PWA)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle className="text-subtitle" imgSrc="" imgAlt="">
        Услуги веб-разработчика
      </PageTitle>
 <div className="grid grid-cols-1 md:grid-cols-2 border border-black border-collapse mb-48">
        {services.map((service) => (
          <article key={service.title} className="border border-black p-8 space-y-4">
            <h3 className="heading3-title">{service.title}</h3>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}

