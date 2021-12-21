import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Movie() {
  const { data = {} } = useQuery(queryKeys.popularMovies, getMovie);

  const params = useParams();
  function getMovieById(id) {
    return data?.data?.results?.find(
      (movie) => Number(movie.id) === Number(id)
    );
  }

  const movie = getMovieById(params.movieId);

  return (
    <>
      <Box>
        <Heading color="red">{movie.title}</Heading>
        <Text>{movie.release_date}</Text>
      </Box>
    </>
  );
}
