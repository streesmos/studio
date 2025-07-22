import PageTitle from '@/components/PageTitle';
import DomainChecker from './DomainChecker';

export const metadata = {
  title: 'Домен',
  description: 'Проверка свободен ли домен',
};

export default function DomainPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 py-8">
      <PageTitle className="text-subtitle" imgSrc="" imgAlt="">
        Проверка домена
      </PageTitle>
      <DomainChecker />
    </main>
  );
}
