import { api } from "./instances";

export const getPopularMovies = async () => await api.get("/movie/popular");
export const getUpcomingMovies = async () => await api.get("/movie/upcoming");
export const getMovie = async (id) => await api.get(`/movie/${id}`);
