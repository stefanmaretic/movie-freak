import React from "react";
import { useLocation } from "react-router-dom";
import MovieCrewList from "../components/movie-crew-list";
import { Layout } from "../components/layout";

export default function MovieFullCrew() {
  const location = useLocation();
  const { movieCrew } = location.state;
  const { movie } = location.state;
  const { actors } = location.state;

  return (
    <Layout>
      <MovieCrewList
        persons={movieCrew}
        movieInfo={movie}
        movieActors={actors}
      />
    </Layout>
  );
}
