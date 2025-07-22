import { PodcastType, getPodcasts } from "@/app/functions/getPodcasts";
import LatestPodcasts from "@/components/LatestPodcasts/LatestPodcasts";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import PodcastContextProvider from "@/context/PodcastContext";

export async function generateMetadata() {
  return { title: "Подкаст" };
}

export default async function PodcastDetails() {
  return null;
}
