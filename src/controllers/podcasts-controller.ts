import {IncomingMessage, ServerResponse} from 'http';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(
        JSON.stringify(
            [
            {
                podcastName: "Flow Podcast",
                episodeName: "IGORFINA + FERNANDO SARDINHA - Flow #623",
                videoId: "bbTjV6V7hVg",
                categories: ["humor"],
            },
            {
                podcastName: "Flow Podcast",
                episodeName: "DANIEL LOPEZ - Flow #622",
                videoId: "n7FxfxBqe6c",
                categories: ["saude", "fitness"],
            },
            ]
        )
    );
}
