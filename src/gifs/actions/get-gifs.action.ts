import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gifs.interface";
import { giphyApi } from "../api/giphy.api";

export const GetGifsByQuery = async(query:string): Promise<Gif[]> =>
{


    const response = await giphyApi<GiphyResponse>("/search",
        {
        params: 
        {
            q:query,
            limit:10
        },
    });

    // fetch("https://api.giphy.com/v1/gifs/search?api_key=JIF7bgaBLergZ34jrG7nc2ziSqHJzsed&q=" + query + "&limit=10&lang=es")


    return response.data.data.map ( ( gif ) => 
    ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }));
}