'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  companyName: z.string().min(1, 'Required'),
  city: z.string().optional(),
  year: z.string().optional(),
  activity: z.string().optional(),
  description: z.string().optional(),
  goals: z.string().optional(),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

export default function BriefPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormSchema) => {
    await fetch('/api/brief', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    reset();
    alert('Form sent');
  };

  return (
    <main className="max-w-[95rem] w-full mx-auto px-4 py-8">
      <h1 className="text-subtitle mb-6">Project Brief</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-xl">
        <Input placeholder="Company name" {...register('companyName')} />
        {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
        <Input placeholder="City" {...register('city')} />
        <Input placeholder="Year founded" {...register('year')} />
        <Input placeholder="Activity" {...register('activity')} />
        <textarea placeholder="About company" {...register('description')} className="border p-2" />
        <textarea placeholder="Goals for the site" {...register('goals')} className="border p-2" />
        <Input placeholder="Email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input placeholder="Phone" {...register('phone')} />
        <Button type="submit" disabled={isSubmitting}>Send</Button>
      </form>
    </main>
  );
}
