import axios from "axios";
export const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "c33b71412633be3e4a413c17428d1624";

export const imageUrl = "http://image.tmdb.org/t/p/w500/";

export const api = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: apiKey,
  },
});
