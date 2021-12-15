import { api } from "./instances";

export const getPopularMovies = async () => await api.get("movie/popular");
