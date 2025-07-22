'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function DomainChecker() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const res = await fetch(`/api/check-domain?domain=${encodeURIComponent(domain)}`);
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      setResult(data.available);
    } catch (err) {
      setError('Не удалось проверить домен');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={checkDomain} className="flex flex-col gap-4 max-w-sm">
      <Input
        placeholder="example.com"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <Button type="submit" disabled={loading || !domain}>
        {loading ? 'Проверка...' : 'Проверить'}
      </Button>
      {result !== null && (
        <p className="mt-4">{result ? 'Домен свободен' : 'Домен занят'}</p>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
}
