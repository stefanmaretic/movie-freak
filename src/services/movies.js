import { api } from "./instances";

// export const getPopularMovies = async () => await api.get("movie/popular");
export const getPopularMovies = async () => await api.get("/movie/popular");
export const getMovie = async (id) => await api.get(`/movie/${id}`);
export const getMovieCast = async (id) => await api.get(`/movie/${id}/credits`);
export const getMovieCrew = async (id) => await api.get(`/movie/${id}/credits`);

export const getMovieRecom = async (id) =>
  await api.get(`/movie/${id}/recommendations`);

export const getVideo = async (id) => await api.get(`/movie/${id}/videos`);

export const getUpcomingMovies = async () => await api.get("/movie/upcoming");

export const fetchMore =
  (genreIds, sortBy) =>
  async ({ pageParam = 1 }) =>
    await api.get("/discover/movie/", {
      params: {
        page: pageParam,
        with_genres: genreIds.join(","),
        sort_by: sortBy,
      },
    });
export const getGenreList = async () => await api.get("/genre/movie/list");

export const getActors = async (actor_id) =>
  await api.get(`/person/${actor_id}`);

export const getActorsCredits = async (actor_id) =>
  await api.get(`/person/${actor_id}/combined_credits`);

export const fetchMoreActors = async ({ pageParam = 1 }) =>
  await api.get("/person/popular", {
    params: { page: pageParam },
  });

export const getActorsSocial = async (actor_id) =>
  await api.get(`/person/${actor_id}/external_ids`);
