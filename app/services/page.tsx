import PageTitle from "@/components/PageTitle";

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
      <div className="prose max-w-none">
        <h2>1. Разработка сайтов</h2>
        <ul>
          <li>Лендинги (Landing Page)</li>
          <li>Корпоративные сайты</li>
          <li>Интернет-магазины</li>
          <li>Многостраничные сайты (каталоги, порталы)</li>
          <li>Сайты-визитки</li>
          <li>SPA-приложения (Single Page Application)</li>
          <li>Административные панели и личные кабинеты</li>
        </ul>
        <h2>2. Дизайн и UX/UI</h2>
        <ul>
          <li>Прототипирование интерфейсов (Wireframes, UX-сценарии)</li>
          <li>Дизайн-макеты (Figma, Adobe XD, Sketch)</li>
          <li>Мобильная и десктопная адаптация</li>
          <li>UI-анимации (CSS, SVG, Lottie)</li>
        </ul>
        <h2>3. Фронтенд-разработка</h2>
        <ul>
          <li>Верстка по макетам (HTML5, CSS3, SCSS)</li>
          <li>Кроссбраузерность и адаптивность (Media Queries, Flexbox, Grid)</li>
          <li>JavaScript и библиотеки: Vanilla JS, jQuery (по требованию)</li>
          <li>Фреймворки: React.js, Vue.js, Next.js (SSR и SSG), Nuxt.js</li>
          <li>Интерактивные элементы: слайдеры, табы, модальные окна, кастомные формы</li>
        </ul>
        <h2>4. Бэкенд-разработка</h2>
        <ul>
          <li>Node.js (Express.js, Nest.js)</li>
          <li>PHP (Laravel, Yii2, WordPress)</li>
          <li>Python (Django, FastAPI)</li>
          <li>API: REST API, GraphQL</li>
          <li>Базы данных: MySQL, PostgreSQL, MongoDB, Firebase</li>
          <li>CMS: WordPress, 1С-Битрикс, Strapi, Sanity, Netlify CMS</li>
        </ul>
        <h2>5. Интеграции</h2>
        <ul>
          <li>Платежные системы (Stripe, ЮKassa, PayPal)</li>
          <li>Онлайн-чаты (JivoSite, Tawk.to, Telegram Bot)</li>
          <li>CRM-системы (Bitrix24, amoCRM, МойСклад)</li>
          <li>Email-рассылки (Sendinblue, Mailchimp)</li>
          <li>Карты (Google Maps, Яндекс.Карты)</li>
          <li>Формы и заявки с отправкой на email/Telegram</li>
        </ul>
        <h2>6. SEO и производительность</h2>
        <ul>
          <li>Базовая SEO-оптимизация (meta, schema.org, robots.txt, sitemap.xml)</li>
          <li>Повышение скорости загрузки (Google PageSpeed, lazy loading, image/webp)</li>
          <li>Оптимизация и минификация кода</li>
          <li>OpenGraph и адаптация для соцсетей</li>
        </ul>
        <h2>7. Хостинг, DevOps и поддержка</h2>
        <ul>
          <li>Настройка хостинга (VPS, Vercel, Netlify, Timeweb, Jino)</li>
          <li>Установка и настройка SSL-сертификатов</li>
          <li>Развёртывание и CI/CD (GitHub Actions, Docker)</li>
          <li>Поддержка, обновления и мониторинг</li>
          <li>Настройка резервного копирования</li>
        </ul>
        <h2>8. Дополнительные услуги</h2>
        <ul>
          <li>Миграция сайта на новую платформу</li>
          <li>Рефакторинг и улучшение кода</li>
          <li>Аудит текущего сайта</li>
          <li>Автоматизация задач (например, выгрузка товаров из 1С)</li>
          <li>Создание Telegram-ботов</li>
          <li>Разработка Progressive Web App (PWA)</li>
        </ul>
      </div>
    </main>
  );
}

