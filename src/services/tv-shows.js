import { api } from "./instances";

export const getTopTvShows = async () => await api.get("/tv/popular");
export const getTvShows = async (id) => await api.get(`/tv/${id}`);
export const getTvShowsCast = async (id) =>
  await api.get(`/tv/${id}/aggregate_credits`);
export const getTvShowsRecom = async (id) =>
  await api.get(`/tv/${id}/recommendations`);
