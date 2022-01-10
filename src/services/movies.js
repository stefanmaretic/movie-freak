import { api } from "./instances";

export const getPopularMovies = async () => await api.get("/movie/popular");
export const getUpcomingMovies = async () => await api.get("/movie/upcoming");
export const getMovie = async (id) => await api.get(`/movie/${id}`);
export const fetchMore =
  (genreIds) =>
  async ({ pageParam = 1 }) =>
    await api.get("/discover/movie/", {
      params: { page: pageParam, with_genres: genreIds.join(",") },
    });
export const getGenreList = async () => await api.get("/genre/movie/list");
