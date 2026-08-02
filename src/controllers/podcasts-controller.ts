import {IncomingMessage, ServerResponse} from 'http';

import { servicesListEpisode } from '../services/list-episodes-services'


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await servicesListEpisode();

    res.writeHead(200, {"content-type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
}
