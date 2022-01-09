import { api } from "./instances";

export const searchByQuery = async (query) =>
  await api.get("search/multi", {
    params: { query },
  });
