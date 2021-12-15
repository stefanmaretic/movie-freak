import { api } from "./instances";

export const getTopTvShows = async () => await api.get("tv/popular");
