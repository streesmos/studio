export type PodcastType = {
  id: number;
  title: string;
  img: string;
  imgAlt: string;
  date: string;
  duration: string;
  episode: string;
  slug: string;
  content: {
    summary: string;
    section1: string;
    quote: [string, string];
    section2: string;
  }[];
};

import podcasts from "@/json/podcasts.json";

export async function getPodcasts(): Promise<PodcastType[]> {
  return podcasts as PodcastType[];
}
