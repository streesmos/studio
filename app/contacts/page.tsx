import ContactsForm from './ContactsForm';

export const metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с нами',
};

export default function ContactsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 py-8">
      <ContactsForm />
    </main>
  );
}
