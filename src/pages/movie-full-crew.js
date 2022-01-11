import React from "react";
import { getMovie, getMovieCast, getMovieCrew } from "../services/movies";
// import MovieCrewList from "../components/movie-crew-list";
import { Layout } from "../components/layout";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { Link, useParams } from "react-router-dom";
import { Box, Heading, Image, Text, Flex, Button } from "@chakra-ui/react";
import { baseProfileImg, baseImageUrl } from "../services/instances";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function MovieFullCrew() {
  const { movieId } = useParams();

  const { data = {} } = useQuery([queryKeys.movies, movieId], () =>
    getMovie(movieId)
  );
  const { data: cast = {} } = useQuery([queryKeys.cast, movieId], () =>
    getMovieCast(movieId)
  );
  const { data: crew = {} } = useQuery([queryKeys.crew, movieId], () =>
    getMovieCrew(movieId)
  );
  const movieCrew = crew?.data?.crew;
  const actors = cast?.data?.cast;

  const movieInfo = data?.data;
  const uniqUsers = Array.from(
    (movieCrew || [])
      .reduce((map, obj) => map.set(obj.id, obj), new Map())
      .values()
  );

  return (
    <Layout>
      <Box w="100%" minH="100vh">
        <Box
          bgColor="black"
          w="100%"
          h="160px"
          py="12px"
          px="24px"
          color="#fff"
        >
          {[movieInfo].map((movie) => (
            <Flex align="center">
              <Image
                src={baseImageUrl + movie?.poster_path}
                alt=""
                h="140px"
                w="110px"
              />
              <Box ml={4}>
                <Flex align="center">
                  <Heading fontSize={["ig", "ig", "3xl", "3xl"]}>
                    {movie?.title}
                  </Heading>
                  <Text
                    color="gray.300"
                    ml={[1, 1, 2, 2]}
                    fontSize={["ig", "ig", "3xl", "3xl"]}
                  >
                    ({new Date(movie?.release_date).getFullYear()})
                  </Text>
                </Flex>
                <Link to={`/movie/${movie?.id}`} textDecoration="none">
                  <Button
                    textDecoration="none"
                    size="sm"
                    colorScheme="red"
                    variant="solid"
                  >
                    <ArrowBackIcon /> Back to main
                  </Button>
                </Link>
              </Box>
            </Flex>
          ))}
        </Box>
        <Flex>
          <Box pl="30px" mt={10}>
            <Heading mb={4}>
              Crew{" "}
              <Text as="span" color="gray.500">
                {uniqUsers?.length}
              </Text>
            </Heading>
            <Box maxH="600px" overflow="auto">
              {uniqUsers?.map((crew) => (
                <Flex mb={4} align="center">
                  {crew.profile_path ? (
                    <Image
                      src={baseProfileImg + crew?.profile_path}
                      alt={crew?.name}
                      w="100px"
                      h="130px"
                      borderRadius="10px"
                    />
                  ) : (
                    <Image
                      src="https://centrefordigestivediseases.com/wp-content/uploads/2017/10/team-member-avatar-300x390.png"
                      alt={crew?.name}
                      w="100px"
                      h="130px"
                      borderRadius="10px"
                    />
                  )}
                  <Box ml={2}>
                    <Text fontWeight="bold">{crew?.name}</Text>
                    <Text>{crew?.job}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
          <Box ml="200px" mt={10}>
            <Heading mb={4}>
              Cast{" "}
              <Text as="span" color="gray.500">
                {actors?.length}
              </Text>
            </Heading>
            <Box maxH="600px" overflow="auto">
              {actors?.map((actor) => (
                <Flex mb={4} align="center">
                  {actor?.profile_path ? (
                    <Image
                      src={baseProfileImg + actor?.profile_path}
                      alt={actor?.name}
                      w="100px"
                      h="130px"
                      borderRadius="10px"
                    />
                  ) : (
                    <Image
                      src="https://centrefordigestivediseases.com/wp-content/uploads/2017/10/team-member-avatar-300x390.png"
                      alt={actor?.name}
                      w="100px"
                      h="130px"
                      borderRadius="10px"
                    />
                  )}
                  <Box ml={2}>
                    <Text fontWeight="bold">{actor?.name}</Text>
                    <Text>{actor?.character}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
