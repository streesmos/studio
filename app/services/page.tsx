import PageTitle from "@/components/PageTitle";

const bulletIcon = "/icons/ri_arrow-right-line.svg";

export const metadata = {
  title: "Услуги",
  description: "Услуги веб-разработчика",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle className="text-subtitle" imgSrc="" imgAlt="">
        Услуги веб-разработчика
      </PageTitle>
      <div className="prose max-w-none space-y-8">
        <h2>1. Разработка сайтов</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Лендинги (Landing Page)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Корпоративные сайты
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Интернет-магазины
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Многостраничные сайты (каталоги, порталы)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Сайты-визитки
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />SPA-приложения (Single Page Application)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Административные панели и личные кабинеты
          </li>
        </ul>
        <h2>2. Дизайн и UX/UI</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Прототипирование интерфейсов (Wireframes, UX-сценарии)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Дизайн-макеты (Figma, Adobe XD, Sketch)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Мобильная и десктопная адаптация
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />UI-анимации (CSS, SVG, Lottie)
          </li>
        </ul>
        <h2>3. Фронтенд-разработка</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Верстка по макетам (HTML5, CSS3, SCSS)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Кроссбраузерность и адаптивность (Media Queries, Flexbox, Grid)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />JavaScript и библиотеки: Vanilla JS, jQuery (по требованию)
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Фреймворки: React.js, Vue.js, Next.js (SSR и SSG), Nuxt.js
          </li>
          <li className="flex gap-2">
            <img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Интерактивные элементы: слайдеры, табы, модальные окна, кастомные формы
          </li>
        </ul>
        <h2>4. Бэкенд-разработка</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Node.js (Express.js, Nest.js)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />PHP (Laravel, Yii2, WordPress)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Python (Django, FastAPI)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />API: REST API, GraphQL</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Базы данных: MySQL, PostgreSQL, MongoDB, Firebase</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />CMS: WordPress, 1С-Битрикс, Strapi, Sanity, Netlify CMS</li>
        </ul>
        <h2>5. Интеграции</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Платежные системы (Stripe, ЮKassa, PayPal)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Онлайн-чаты (JivoSite, Tawk.to, Telegram Bot)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />CRM-системы (Bitrix24, amoCRM, МойСклад)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Email-рассылки (Sendinblue, Mailchimp)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Карты (Google Maps, Яндекс.Карты)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Формы и заявки с отправкой на email/Telegram</li>
        </ul>
        <h2>6. SEO и производительность</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Базовая SEO-оптимизация (meta, schema.org, robots.txt, sitemap.xml)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Повышение скорости загрузки (Google PageSpeed, lazy loading, image/webp)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Оптимизация и минификация кода</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />OpenGraph и адаптация для соцсетей</li>
        </ul>
        <h2>7. Хостинг, DevOps и поддержка</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Настройка хостинга (VPS, Vercel, Netlify, Timeweb, Jino)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Установка и настройка SSL-сертификатов</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Развёртывание и CI/CD (GitHub Actions, Docker)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Поддержка, обновления и мониторинг</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Настройка резервного копирования</li>
        </ul>
        <h2>8. Дополнительные услуги</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Миграция сайта на новую платформу</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Рефакторинг и улучшение кода</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Аудит текущего сайта</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Автоматизация задач (например, выгрузка товаров из 1С)</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Создание Telegram-ботов</li>
          <li className="flex gap-2"><img src={bulletIcon} alt="" className="w-4 h-4 mt-1" />Разработка Progressive Web App (PWA)</li>
        </ul>
      </div>
    </main>
  );
}

