import { Box, Container, Heading } from "@chakra-ui/react";
import Layout from "../components/layout";
import { Carousel } from "../components/carousel";
import { getPopularMovies } from "../services/movies";
import { getTopTvShows } from "../services/tv-shows";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";

export function Home() {
  const popularMoviesQuery = useQuery(
    queryKeys.popularMovies,
    getPopularMovies
  );
  const topTopTvShow = useQuery(queryKeys.topTvShows, getTopTvShows);

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
            Top Rated Tv Shows
          </Heading>
          <Carousel items={topTopTvShow.data} />
        </Box>
      </Container>
    </Layout>
  );
}
