import { api } from "./instances";

export const getTopTvShows = async () => await api.get("tv/popular");
export const getAirTvShows = async () => await api.get("tv/airing_today");
