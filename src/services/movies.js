import { api } from "./instances";

// export const getPopularMovies = async () => await api.get("movie/popular");
export const getPopularMovies = async () => await api.get("/movie/popular");
export const getMovie = async (id) => await api.get(`/movie/${id}`);
export const getMovieCast = async (id) => await api.get(`/movie/${id}/credits`);
export const getMovieCrew = async (id) => await api.get(`/movie/${id}/credits`);

export const getMovieRecom = async (id) =>
  await api.get(`/movie/${id}/recommendations`);

export const getVideo = async (id) => await api.get(`/movie/${id}/videos`);
