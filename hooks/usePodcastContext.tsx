import { createContext, useContext } from 'react'
import type { PodcastType } from '@/app/functions/getPodcasts'

export const PodcastContext = createContext<{ data: PodcastType[]; setData: React.Dispatch<React.SetStateAction<PodcastType[]>> } | null>(null)

export function usePodcastContext() {
  const ctx = useContext(PodcastContext)
  if (!ctx) throw new Error('usePodcastContext must be used within PodcastContextProvider')
  return ctx
}
