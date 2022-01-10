import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Movie() {
  const { movieId } = useParams();

  const { data = {} } = useQuery([queryKeys.movies, movieId], () =>
    getMovie(movieId)
  );

  const movie = data?.data;

  return (
    <>
      <Box>
        <Heading color="red">{movie?.title}</Heading>
        <Text>{movie?.release_date}</Text>
      </Box>
    </>
  );
}
