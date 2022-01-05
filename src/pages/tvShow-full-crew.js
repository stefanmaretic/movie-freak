import React from "react";
import { useLocation } from "react-router-dom";

import TvShowCrewList from "../components/tv-show-crew-list";
import { Layout } from "../components/layout";

export default function TvShowFullCrew() {
  const location = useLocation();
  const { tvCrew } = location.state;
  const { tvShows } = location.state;
  const { tvShowActors } = location.state;
  return (
    <Layout>
      <TvShowCrewList
        tvShowsCrew={tvCrew}
        tvShowInfo={tvShows}
        tvShowCast={tvShowActors}
      />
    </Layout>
  );
}
