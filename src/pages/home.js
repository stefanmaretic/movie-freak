import { Box, Container, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { getPopularMovies } from "../services/movies";

export function Home() {
  const { data = {} } = useQuery(queryKeys.popularMovies, getPopularMovies);

  return (
    <Container maxW="container.xl">
      <h1>Home</h1>
      {data?.data?.results?.map((movie) => (
        <VStack key={movie.id} gap="4">
          <VStack>
            <Box>{movie.title}</Box>
            <Box>{movie.popularity}</Box>
            <Box>{movie.vote_average}</Box>
            <Box>{movie.vote_count}</Box>
          </VStack>
        </VStack>
      ))}
    </Container>
  );
}
