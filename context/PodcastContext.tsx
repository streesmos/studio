"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import type { PodcastType } from '@/app/functions/getPodcasts';
import { getPodcasts } from '@/app/functions/getPodcasts';

const PodcastContext = createContext<{
  data: PodcastType[];
  setData: React.Dispatch<React.SetStateAction<PodcastType[]>>;
} | null>(null);

export function PodcastContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PodcastType[]>([]);

  useEffect(() => {
    getPodcasts().then(setData).catch(() => {});
  }, []);

  return (
    <PodcastContext.Provider value={{ data, setData }}>
      {children}
    </PodcastContext.Provider>
  );
}

export function usePodcastContext() {
  const context = useContext(PodcastContext);
  if (!context) throw new Error('usePodcastContext must be used within PodcastContextProvider');
  return context;
}
