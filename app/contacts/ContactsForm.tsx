'use client';

import PageTitle from "@/components/PageTitle";
import React from "react";
import { useForm as useFormHook } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormSpree } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email('Неверный email').optional(),
  message: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

export default function ContactsForm() {
  const { register, handleSubmit } = useFormHook<FormSchema>({ resolver: zodResolver(schema) });
  const [state, handleSubmitSpree] = useFormSpree<FormSchema>('mzzveraz');

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


  return (
    <>
      <PageTitle className="text-subtitle pb-6" imgSrc="" imgAlt="">
        Контакты
      </PageTitle>
      <div className="flex flex-col gap-4 mb-8">
        <a href="tel:+79258453320" className="flex items-center gap-2">
          <img src="/icons/ri_phone-fill.svg" alt="phone icon" className="w-5 h-5" />
          +79258453320
        </a>
        <a href="https://t.me/strees" className="flex items-center gap-2">
          <img src="/icons/ri_telegram-fill.svg" alt="telegram icon" className="w-5 h-5" />
          @strees
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-xl">
         {state.succeeded && (
          <p className="p-4 bg-green-100 text-green-700">Сообщение отправлено</p>
        )}
        <Input placeholder="Имя" {...register('name')} />
        <Input type="email" placeholder="Email" {...register('email')} />
        <textarea className="border p-2" placeholder="Сообщение" {...register('message')} />
        <Button type="submit">Отправить</Button>
      </form>
    </>
  );
}
