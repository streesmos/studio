'use client';

import React from "react";
import { useForm as useFormHook } from 'react-hook-form';
import { useForm as useFormSpree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  компания: z.string().min(1, 'Обязательно'),
  город: z.string().optional(),
  год_основания: z.string().optional(),
  сфера_деятельности: z.string().optional(),
  краткое_описание: z.string().optional(),
  задачи_сайта: z.array(z.string()).optional(),
  целевая_аудитори: z.string().optional(),
  разделы_сайта: z.array(z.string()).optional(),
  конкретные_услуги: z.string().optional(),
  фотографии: z.string().optional(),
  стиль: z.string().optional(),
  примеры_сайтов: z.string().optional(),
  логотип: z.string().optional(),
  цвета: z.string().optional(),
  мобильная_адаптация: z.string().optional(),
  функции_на_сайте: z.array(z.string()).optional(),
  хостинг: z.string().optional(),
  админка: z.string().optional(),
  почта: z.string().optional(),
  телефон: z.string().optional(),
  дата_запуска: z.string().optional(),
  бюджет: z.string().optional(),
  есть_контент: z.string().optional(),
  другое: z.string().optional(),
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
    await handleSubmitSpree(data);
  }

  if (state.succeeded) {
    return <p className="p-4">Анкета отправлена</p>;
  }

  return (
    <main className="max-w-[95rem] w-full mx-auto px-4 py-8">
      <h1 className="text-subtitle mb-6">Бриф на разработку сайта</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 max-w-xl">
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <Input placeholder="Название компании" {...register('компания')} />
            <Input placeholder="Город / регион" {...register('город')} />
            <Input placeholder="Год основания" {...register('год_основания')} />
            <Input placeholder="Сфера деятельности" {...register('сфера_деятельности')} />
            <textarea className="border p-2" placeholder="Краткое описание" {...register('краткое_описание')} />
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Какие задачи должен решать сайт?</p>
            <label><input type="checkbox" value="clients" {...register('задачи_сайта')} /> Привлекать новых клиентов</label>
            <label><input type="checkbox" value="services" {...register('задачи_сайта')} /> Презентация услуг</label>
            <label><input type="checkbox" value="requests" {...register('задачи_сайта')} /> Получение заявок / звонков</label>
            <label><input type="checkbox" value="portfolio" {...register('задачи_сайта')} /> Портфолио работ</label>
            <label><input type="checkbox" value="presence" {...register('задачи_сайта')} /> Расширение онлайн-присутствия</label>
            <label><input type="checkbox" value="other" {...register('задачи_сайта')} /> Другое</label>
            <textarea className="border p-2" placeholder="Целевая аудитория" {...register('целевая_аудитори')} />
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Какие разделы вы хотите видеть?</p>
            <label><input type="checkbox" value="home" {...register('разделы_сайта')} /> Главная</label>
            <label><input type="checkbox" value="about" {...register('разделы_сайта')} /> О компании</label>
            <label><input type="checkbox" value="services" {...register('разделы_сайта')} /> Услуги</label>
            <label><input type="checkbox" value="portfolio" {...register('разделы_сайта')} /> Портфолио</label>
            <label><input type="checkbox" value="reviews" {...register('разделы_сайта')} /> Отзывы</label>
            <label><input type="checkbox" value="contacts" {...register('разделы_сайта')} /> Контакты</label>
            <label><input type="checkbox" value="prices" {...register('разделы_сайта')} /> Цены</label>
            <label><input type="checkbox" value="faq" {...register('разделы_сайта')} /> FAQ</label>
            <label><input type="checkbox" value="blog" {...register('разделы_сайта')} /> Блог</label>
            <label><input type="checkbox" value="other" {...register('разделы_сайта')} /> Другое</label>
            <textarea className="border p-2" placeholder="Конкретные услуги" {...register('конкретные_услуги')} />
            <p className="font-semibold">Есть ли фотографии работ?</p>
            <label><input type="radio" value="yes" {...register('фотографии')} /> Да</label>
            <label><input type="radio" value="no" {...register('фотографии')} /> Нет</label>
            <label><input type="radio" value="help" {...register('фотографии')} /> Нужна помощь</label>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col gap-4">
            <Input placeholder="Предпочтительный стиль" {...register('стиль')} />
            <textarea className="border p-2" placeholder="Примеры сайтов" {...register('примеры_сайтов')} />
            <p className="font-semibold">Логотип</p>
            <label><input type="radio" value="yes" {...register('логотип')} /> Есть</label>
            <label><input type="radio" value="no" {...register('логотип')} /> Нет</label>
            <Input placeholder="Фирменные цвета" {...register('цвета')} />
            <p className="font-semibold">Нужна ли адаптация под мобильные устройства?</p>
            <label><input type="radio" value="yes" {...register('мобильная_адаптация')} /> Да</label>
            <label><input type="radio" value="no" {...register('мобильная_адаптация')} /> Нет</label>
            <p className="font-semibold">Какие функции должны быть на сайте?</p>
            <label><input type="checkbox" value="feedback" {...register('функции_на_сайте')} /> Форма обратной связи</label>
            <label><input type="checkbox" value="callback" {...register('функции_на_сайте')} /> Кнопка звонка</label>
            <label><input type="checkbox" value="calc" {...register('функции_на_сайте')} /> Онлайн-калькулятор</label>
            <label><input type="checkbox" value="chat" {...register('функции_на_сайте')} /> Чат</label>
            <label><input type="checkbox" value="social" {...register('функции_на_сайте')} /> Интеграция с соцсетями</label>
            <label><input type="checkbox" value="map" {...register('функции_на_сайте')} /> Карта с адресом</label>
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Нужен ли домен и хостинг?</p>
            <label><input type="radio" value="yes" {...register('хостинг')} /> Да</label>
            <label><input type="radio" value="have" {...register('хостинг')} /> Уже есть</label>
            <p className="font-semibold">Нужна ли админка?</p>
            <label><input type="radio" value="yes" {...register('админка')} /> Да</label>
            <label><input type="radio" value="no" {...register('админка')} /> Нет</label>
            <Input placeholder="Email для заявок" {...register('почта')} />
            <Input placeholder="Телефон" {...register('телефон')} />
          </div>
        )}
        {step === 6 && (
          <div className="flex flex-col gap-4">
            <Input placeholder="Желаемая дата запуска" {...register('дата_запуска')} />
            <p className="font-semibold">Примерный бюджет</p>
            <label><input type="radio" value="<100k" {...register('бюджет')} /> До 100000 ₽</label>
            <label><input type="radio" value="100-200" {...register('бюджет')} /> 100000 – 200000 ₽</label>
            <label><input type="radio" value="200-400" {...register('бюджет')} /> 200000 – 400000 ₽</label>
            <label><input type="radio" value=">400" {...register('бюджет')} /> Больше 400000 ₽</label>
            <label><input type="radio" value="unknown" {...register('бюджет')} /> Не знаю</label>
          </div>
        )}
        {step === 7 && (
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Есть ли готовый текстовый контент?</p>
            <label><input type="radio" value="yes" {...register('есть_контент')} /> Да</label>
            <label><input type="radio" value="no" {...register('есть_контент')} /> Нет</label>
            <textarea className="border p-2" placeholder="Дополнительная информация" {...register('другое')} />
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
