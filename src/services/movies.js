import { api } from "./instances";

export const getPopularMovies = async () => await api.get("movie/popular");
export const getTopTvShow = async () => await api.get("tv/popular");
