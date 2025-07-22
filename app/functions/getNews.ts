import news from "@/json/news.json";

export async function getNews(): Promise<string[]> {
  return news as string[];
}
