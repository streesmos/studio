'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const schema = z.object({
  email: z.string().email('Неверный email'),
  companyName: z.string().min(1, 'Обязательно')
}).passthrough()

type FormSchema = z.infer<typeof schema>

export default function BriefPage() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormSchema>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormSchema) => {
    await fetch('/api/brief', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    alert('Форма отправлена')
  }

  const next = () => setStep((s) => s + 1)
  const back = () => setStep((s) => s - 1)

  return (
    <main className="max-w-[95rem] w-full mx-auto px-4 py-8">
      <h1 className="text-subtitle mb-6">Бриф</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 max-w-2xl">
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">1. Общая информация о компании</h2>
            <Input placeholder="Название компании" {...register('companyName')} />
            <Input placeholder="Город / регион" {...register('city')} />
            <Input placeholder="Год основания" {...register('year')} />
            <Input placeholder="Сфера деятельности" {...register('activity')} />
            <textarea placeholder="Опишите компанию" {...register('description')} className="border p-2" />
            <Button type="button" onClick={next}>Далее</Button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">2. Цель сайта</h2>
            <label className="font-semibold">Какие задачи должен решать сайт?</label>
            <div className="flex flex-col gap-2 pl-4">
              <label><Checkbox {...register('tasks')} value="clients" /> Привлекать новых клиентов</label>
              <label><Checkbox {...register('tasks')} value="presentation" /> Презентация услуг</label>
              <label><Checkbox {...register('tasks')} value="leads" /> Получение заявок / звонков</label>
              <label><Checkbox {...register('tasks')} value="portfolio" /> Портфолио работ</label>
              <label><Checkbox {...register('tasks')} value="presence" /> Расширение онлайн-присутствия</label>
              <label><Checkbox {...register('tasks')} value="other" /> Другое</label>
            </div>
            <textarea placeholder="Ваша целевая аудитория" {...register('audience')} className="border p-2" />
            <div className="flex gap-2">
              <Button type="button" onClick={back}>Назад</Button>
              <Button type="button" onClick={next}>Далее</Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">3. Структура и содержание сайта</h2>
            <label className="font-semibold">Какие разделы вы хотите видеть?</label>
            <div className="flex flex-col gap-2 pl-4">
              <label><Checkbox {...register('sections')} value="home" /> Главная</label>
              <label><Checkbox {...register('sections')} value="about" /> О компании</label>
              <label><Checkbox {...register('sections')} value="services" /> Услуги</label>
              <label><Checkbox {...register('sections')} value="portfolio" /> Портфолио</label>
              <label><Checkbox {...register('sections')} value="reviews" /> Отзывы</label>
              <label><Checkbox {...register('sections')} value="contacts" /> Контакты</label>
              <label><Checkbox {...register('sections')} value="prices" /> Цены</label>
              <label><Checkbox {...register('sections')} value="faq" /> FAQ</label>
              <label><Checkbox {...register('sections')} value="blog" /> Блог</label>
              <label><Checkbox {...register('sections')} value="order" /> Онлайн-заявка</label>
              <label><Checkbox {...register('sections')} value="other" /> Другое</label>
            </div>
            <textarea placeholder="Перечислите услуги" {...register('services')} className="border p-2" />
            <label className="font-semibold">Есть ли фотографии работ?</label>
            <RadioGroup {...register('photos')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="yes" /> Да</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="no" /> Нет</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="need" /> Нужно помочь с фотоконтентом</label>
            </RadioGroup>
            <div className="flex gap-2">
              <Button type="button" onClick={back}>Назад</Button>
              <Button type="button" onClick={next}>Далее</Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">4. Дизайн и функциональность</h2>
            <Input placeholder="Предпочтительный стиль" {...register('style')} />
            <textarea placeholder="Сайты, которые нравятся" {...register('references')} className="border p-2" />
            <label className="font-semibold">Фирменные цвета / логотип</label>
            <RadioGroup {...register('branding')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="logo" /> Логотип есть</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="no-logo" /> Логотипа нет</label>
            </RadioGroup>
            <Input placeholder="Цвета" {...register('colors')} />
            <label className="font-semibold">Нужна адаптация под мобильные?</label>
            <RadioGroup {...register('mobile')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="yes" /> Да</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="no" /> Нет</label>
            </RadioGroup>
            <label className="font-semibold">Необходимые функции</label>
            <div className="flex flex-col gap-2 pl-4">
              <label><Checkbox {...register('functions')} value="feedback" /> Форма обратной связи</label>
              <label><Checkbox {...register('functions')} value="callback" /> Кнопка "Заказать звонок"</label>
              <label><Checkbox {...register('functions')} value="calculator" /> Онлайн-калькулятор</label>
              <label><Checkbox {...register('functions')} value="chat" /> Чат</label>
              <label><Checkbox {...register('functions')} value="social" /> Интеграция с соцсетями</label>
              <label><Checkbox {...register('functions')} value="map" /> Карта с адресом</label>
              <label><Checkbox {...register('functions')} value="other" /> Другое</label>
            </div>
            <div className="flex gap-2">
              <Button type="button" onClick={back}>Назад</Button>
              <Button type="button" onClick={next}>Далее</Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">5. Техническая часть</h2>
            <label className="font-semibold">Нужен ли домен и хостинг?</label>
            <RadioGroup {...register('hosting')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="yes" /> Да, всё нужно с нуля</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="exists" /> Уже есть</label>
            </RadioGroup>
            <label className="font-semibold">Нужна ли админка?</label>
            <RadioGroup {...register('admin')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="yes" /> Да</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="no" /> Нет</label>
            </RadioGroup>
            <Input placeholder="Email для заявок" {...register('email')} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <Input placeholder="Телефон для обратного звонка" {...register('phone')} />
            <div className="flex gap-2">
              <Button type="button" onClick={back}>Назад</Button>
              <Button type="button" onClick={next}>Далее</Button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">6. Сроки и бюджет</h2>
            <Input placeholder="Желаемая дата запуска" {...register('date')} />
            <label className="font-semibold">Бюджет</label>
            <RadioGroup {...register('budget')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="<100" /> До 100000 ₽</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="100-200" /> 100000 – 200000 ₽</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="200-400" /> 200000 – 400000 ₽</label>
              <label className="flex items-center gap-2"><RadioGroupItem value=">400" /> Больше 400000 ₽</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="unknown" /> Не знаю</label>
            </RadioGroup>
            <div className="flex gap-2">
              <Button type="button" onClick={back}>Назад</Button>
              <Button type="button" onClick={next}>Далее</Button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">7. Дополнительно</h2>
            <label className="font-semibold">Есть ли текстовый контент?</label>
            <RadioGroup {...register('content')} className="flex flex-col gap-2 pl-4">
              <label className="flex items-center gap-2"><RadioGroupItem value="yes" /> Да</label>
              <label className="flex items-center gap-2"><RadioGroupItem value="no" /> Нет, нужна помощь</label>
            </RadioGroup>
            <textarea placeholder="Что ещё хотите добавить?" {...register('extra')} className="border p-2" />
            <div className="flex gap-2">
              <Button type="button" onClick={back}>Назад</Button>
              <Button type="submit">Отправить</Button>
            </div>
          </div>
        )}
      </form>
    </main>
  )
}
