import { Box, Container, Heading } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { Carousel } from "../components/carousel";
import { getPopularMovies, getUpcomingMovies } from "../services/movies";
import { getTopTvShows, getAirTvShows } from "../services/tv-shows";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";

export function Home() {
  const popularMoviesQuery = useQuery(
    queryKeys.popularMovies,
    getPopularMovies
  );
  const upcomingMovies = useQuery(queryKeys.upcomingMovies, getUpcomingMovies);
  const topTvShows = useQuery(queryKeys.topTvShows, getTopTvShows);
  const onAirTvShows = useQuery(queryKeys.airTvShows, getAirTvShows);

  return (
    <Layout>
      <Container maxW="container.xl">
        <Box my={2}>
          <Heading as="h3" size="md" pb={3}>
            Popular Movies
          </Heading>
          <Carousel items={popularMoviesQuery.data} />
        </Box>
        <Box my={10}>
          <Heading as="h3" size="md" pb={3}>
            Upcoming Movies
          </Heading>
          <Carousel items={upcomingMovies.data} />
        </Box>

        <Box my={10}>
          <Heading as="h3" size="md" pb={3}>
            Top Rated Tv Shows
          </Heading>
          <Carousel items={topTvShows.data} />
        </Box>
        <Box my={10}>
          <Heading as="h3" size="md" pb={3}>
            Airing Today Tv Shows
          </Heading>
          <Carousel items={onAirTvShows.data} />
        </Box>
      </Container>
    </Layout>
  );
}
