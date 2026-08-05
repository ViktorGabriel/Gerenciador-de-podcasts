import { repositoryPodcasts } from "../repositories/podcast-reposity"

export const servicesFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcasts()
    return data.filter((podcast) => podcast.podcastName === podcastName);
}