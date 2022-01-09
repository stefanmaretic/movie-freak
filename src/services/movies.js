import { api } from "./instances";

export const getPopularMovies = async () => await api.get("/movie/popular");
export const getUpcomingMovies = async () => await api.get("/movie/upcoming");
export const getMovie = async (id) => await api.get(`/movie/${id}`);

export const fetchMore = async ({ pageParam = 1, meta }) =>
  await api.get("/discover/movie/", {
    params: { page: pageParam, with_genres: meta.join(",") },
  });

export const getGenreList = async () => await api.get("/genre/movie/list");
// export const getMovieByGenre = async (with_genres) =>
//   await api.get("/discover/movie/", {
//     params: { with_genres: with_genres.join(",") },
//   });
