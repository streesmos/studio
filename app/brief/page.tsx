'use client';

import React from "react";
import { useForm as useFormHook } from 'react-hook-form';
import { useForm as useFormSpree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  companyName: z.string().optional(),
  city: z.string().optional(),
  year: z.string().optional(),
  activity: z.string().optional(),
  description: z.string().optional(),
  goals: z.array(z.string()).optional(),
  target: z.string().optional(),
  sections: z.array(z.string()).optional(),
  services: z.string().optional(),
  photos: z.string().optional(),
  style: z.string().optional(),
  sites: z.string().optional(),
  logo: z.string().optional(),
  colors: z.string().optional(),
  mobile: z.string().optional(),
  functions: z.array(z.string()).optional(),
  hosting: z.string().optional(),
  admin: z.string().optional(),
  requestEmail: z.string().optional(),
  requestPhone: z.string().optional(),
  deadline: z.string().optional(),
  budget: z.string().optional(),
  content: z.string().optional(),
  more: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

export default function BriefPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormHook<FormSchema>({ resolver: zodResolver(schema) });
  const [state, handleSubmitSpree] = useFormSpree<FormSchema>('mzzveraz');

  const [step, setStep] = React.useState(1);

  async function onSubmit(data: FormSchema) {
    const processed: Record<string, any> = { ...data };
    Object.entries(processed).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '') ||
        (Array.isArray(value) && value.length === 0)
      ) {
        processed[key] = 'пусто';
      }
    });
    await handleSubmitSpree(processed);
  }

  if (state.succeeded) {
    return <p className="p-4">Анкета отправлена</p>;
  }

  return (
    <main className="max-w-[95rem] w-full mx-auto px-4 py-8">
      <h1 className="text-subtitle mb-6 pb-6">Бриф на разработку сайта</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 max-w-xl">
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <Input placeholder="Название компании" {...register('companyName')} />
            <Input placeholder="Город / регион" {...register('city')} />
            <Input placeholder="Год основания" {...register('year')} />
            <Input placeholder="Сфера деятельности" {...register('activity')} />
            <textarea className="border p-2" placeholder="Краткое описание" {...register('description')} />
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Какие задачи должен решать сайт?</p>
            <label><input type="checkbox" value="clients" {...register('goals')} /> Привлекать новых клиентов</label>
            <label><input type="checkbox" value="services" {...register('goals')} /> Презентация услуг</label>
            <label><input type="checkbox" value="requests" {...register('goals')} /> Получение заявок / звонков</label>
            <label><input type="checkbox" value="portfolio" {...register('goals')} /> Портфолио работ</label>
            <label><input type="checkbox" value="presence" {...register('goals')} /> Расширение онлайн-присутствия</label>
            <label><input type="checkbox" value="other" {...register('goals')} /> Другое</label>
            <textarea className="border p-2" placeholder="Целевая аудитория" {...register('target')} />
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Какие разделы вы хотите видеть?</p>
            <label><input type="checkbox" value="home" {...register('sections')} /> Главная</label>
            <label><input type="checkbox" value="about" {...register('sections')} /> О компании</label>
            <label><input type="checkbox" value="services" {...register('sections')} /> Услуги</label>
            <label><input type="checkbox" value="portfolio" {...register('sections')} /> Портфолио</label>
            <label><input type="checkbox" value="reviews" {...register('sections')} /> Отзывы</label>
            <label><input type="checkbox" value="contacts" {...register('sections')} /> Контакты</label>
            <label><input type="checkbox" value="prices" {...register('sections')} /> Цены</label>
            <label><input type="checkbox" value="faq" {...register('sections')} /> FAQ</label>
            <label><input type="checkbox" value="blog" {...register('sections')} /> Блог</label>
            <label><input type="checkbox" value="other" {...register('sections')} /> Другое</label>
            <textarea className="border p-2" placeholder="Конкретные услуги" {...register('services')} />
            <p className="font-semibold">Есть ли фотографии работ?</p>
            <label><input type="radio" value="yes" {...register('photos')} /> Да</label>
            <label><input type="radio" value="no" {...register('photos')} /> Нет</label>
            <label><input type="radio" value="help" {...register('photos')} /> Нужна помощь</label>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col gap-4">
            <Input placeholder="Предпочтительный стиль" {...register('style')} />
            <textarea className="border p-2" placeholder="Примеры сайтов" {...register('sites')} />
            <p className="font-semibold">Логотип</p>
            <label><input type="radio" value="yes" {...register('logo')} /> Есть</label>
            <label><input type="radio" value="no" {...register('logo')} /> Нет</label>
            <Input placeholder="Фирменные цвета" {...register('colors')} />
            <p className="font-semibold">Нужна ли адаптация под мобильные устройства?</p>
            <label><input type="radio" value="yes" {...register('mobile')} /> Да</label>
            <label><input type="radio" value="no" {...register('mobile')} /> Нет</label>
            <p className="font-semibold">Какие функции должны быть на сайте?</p>
            <label><input type="checkbox" value="feedback" {...register('functions')} /> Форма обратной связи</label>
            <label><input type="checkbox" value="callback" {...register('functions')} /> Кнопка звонка</label>
            <label><input type="checkbox" value="calc" {...register('functions')} /> Онлайн-калькулятор</label>
            <label><input type="checkbox" value="chat" {...register('functions')} /> Чат</label>
            <label><input type="checkbox" value="social" {...register('functions')} /> Интеграция с соцсетями</label>
            <label><input type="checkbox" value="map" {...register('functions')} /> Карта с адресом</label>
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Нужен ли домен и хостинг?</p>
            <label><input type="radio" value="yes" {...register('hosting')} /> Да</label>
            <label><input type="radio" value="have" {...register('hosting')} /> Уже есть</label>
            <p className="font-semibold">Нужна ли админка?</p>
            <label><input type="radio" value="yes" {...register('admin')} /> Да</label>
            <label><input type="radio" value="no" {...register('admin')} /> Нет</label>
            <Input placeholder="Email для заявок" {...register('requestEmail')} />
            <Input placeholder="Телефон" {...register('requestPhone')} />
          </div>
        )}
        {step === 6 && (
          <div className="flex flex-col gap-4">
            <Input placeholder="Желаемая дата запуска" {...register('deadline')} />
            <p className="font-semibold">Примерный бюджет</p>
            <label><input type="radio" value="<100k" {...register('budget')} /> До 100000 ₽</label>
            <label><input type="radio" value="100-200" {...register('budget')} /> 100000 – 200000 ₽</label>
            <label><input type="radio" value="200-400" {...register('budget')} /> 200000 – 400000 ₽</label>
            <label><input type="radio" value=">400" {...register('budget')} /> Больше 400000 ₽</label>
            <label><input type="radio" value="unknown" {...register('budget')} /> Не знаю</label>
          </div>
        )}
        {step === 7 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Есть ли готовый текстовый контент?</p>
            <label><input type="radio" value="yes" {...register('content')} /> Да</label>
            <label><input type="radio" value="no" {...register('content')} /> Нет</label>
            <textarea className="border p-2" placeholder="Дополнительная информация" {...register('more')} />
          </div>
        )}
        <div className="flex gap-4 pt-4">
          {step > 1 && (
            <Button type="button" onClick={() => setStep(step - 1)}>
              Назад
            </Button>
          )}
          {step < 7 && (
            <Button type="button" onClick={() => setStep(step + 1)}>
              Далее
            </Button>
          )}
          {step === 7 && <Button type="submit">Отправить</Button>}
        </div>
      </form>
    </main>
  );
}
