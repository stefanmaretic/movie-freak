import axios from "axios";
export const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "c33b71412633be3e4a413c17428d1624";

export const baseImageUrl = "http://image.tmdb.org/t/p/w500/";
export const baseProfileImg = "http://image.tmdb.org/t/p/w185/";
export const baseVideoUrl =
  "https://api.themoviedb.org/3/movie/297762?api_key=###&append_to_response=videos";
export const api = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: apiKey,
  },
});
