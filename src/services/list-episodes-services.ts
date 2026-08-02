import { repositoryPodcasts } from "../repositories/podcast-reposity";

export const servicesListEpisode = async () => {
    const data = await repositoryPodcasts();

    return data
}