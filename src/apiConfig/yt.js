export const ytOptions = {
    method: "GET",
    baseURL: "https://youtube-music-api-detailed.p.rapidapi.com",
    categories: {
        getWatchPlayList: "getWatchPlayList",
        popular: {
            search: "search",
            moods: "categories",
            trends: "trends",
        },
    },
    params: { lang: "en", country: "in", query: "" },
    headers: {
        "X-RapidAPI-Key": "0f4c851a24msh7602c4cf6d5feffp1049dbjsn47eb9af031fa",
        "X-RapidAPI-Host": "youtube-music-api-detailed.p.rapidapi.com",
    },
}
