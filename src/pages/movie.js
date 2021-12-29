import { Link, useParams } from "react-router-dom";
import { getMovie, getMovieCast, getMovieRecom } from "../services/movies";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { baseImageUrl, baseProfileImg } from "../services/instances";
import { Box, Heading, Text, Image, Flex, HStack } from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { MovieDetails } from "../components/movie-details";

import { MovieCard } from "../components/movie-card";

export function Movie() {
  const { movieId } = useParams();

  const { data = {} } = useQuery([queryKeys.movies, movieId], () =>
    getMovie(movieId)
  );
  const { data: cast = {} } = useQuery([queryKeys.cast, movieId], () =>
    getMovieCast(movieId)
  );

  const { data: recom = {} } = useQuery([queryKeys.recom, movieId], () =>
    getMovieRecom(movieId)
  );

  const actors = cast?.data?.cast;
  // console.log(actors);
  const movie = data?.data;
  // console.log(movie);
  const CollectionImg =
    baseImageUrl + movie?.belongs_to_collection?.backdrop_path;
  const movieRecom = recom?.data;
  console.log(movieRecom);

  return (
    <>
      <Layout>
        <MovieDetails />
        <Flex>
          <Box m={(10, 10)}>
            <Heading>Cast</Heading>
            <Box
              borderRadius="5"
              boxShadow="xl"
              overflow="auto"
              zIndex="popover"
              bg="white"
              p={2}
              cursor="pointer"
              w="720px"
              css={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "gray",
                  borderRadius: "24px",
                },
              }}
            >
              <HStack>
                {actors?.map((actor) => (
                  <>
                    <Box key={actor?.id} minW="200px" minH="266px">
                      {actor?.profile_path ? (
                        <Image
                          w="150px"
                          h="200px"
                          src={baseProfileImg + actor.profile_path}
                          alt=""
                        />
                      ) : (
                        <Image
                          w="150px"
                          h="200px"
                          src="https://centrefordigestivediseases.com/wp-content/uploads/2017/10/team-member-avatar-300x390.png"
                          alt=""
                        />
                      )}

                      <Text fontWeight="bold">{actor.name}</Text>
                      <Text>{actor.character}</Text>
                    </Box>
                  </>
                ))}
              </HStack>
            </Box>

            <Box mt={20}>
              <Heading>Related movies</Heading>

              <Box
                borderRadius="5"
                boxShadow="xl"
                overflow="auto"
                zIndex="popover"
                bg="white"
                p={2}
                cursor="pointer"
                w="720px"
                css={{
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "gray",
                    borderRadius: "24px",
                  },
                }}
              >
                <HStack>
                  {movieRecom?.results.map((result) => {
                    return (
                      <Box key={result.id} minW="160px" minH="266px">
                        <Link to={`/movie/${result.id}`}>
                          <MovieCard
                            title={result.title || result.name}
                            image={result.poster_path}
                            rating={result.vote_average}
                            year={result.release_date || result.first_air_date}
                          />
                        </Link>
                      </Box>
                    );
                  })}
                </HStack>
              </Box>
            </Box>
          </Box>
          <Box mt={10} ml={40}>
            <HStack gap={5} mb={8}>
              <Link to="#">
                <Icon as={BsInstagram} />
              </Link>
              <Link to="#">
                <Icon as={BsFacebook} />
              </Link>
              <Link to="#">
                <Icon as={BsTwitter} />
              </Link>
              <Link to="/">
                <Icon as={GoHome} />
              </Link>
            </HStack>
            <Box mb={5}>
              <Text fontWeight="bold">Original title:</Text>
              <Text as="span">{movie?.original_title}</Text>
            </Box>
            <Box mb={5}>
              <Text fontWeight="bold">Status:</Text>
              <Text as="span">{movie?.status}</Text>
            </Box>
            <Box mb={5}>
              <Text fontWeight="bold">Original language:</Text>
              <Text as="span">{movie?.original_language}</Text>
            </Box>
            <Box mb={5}>
              <Text fontWeight="bold">Budget:</Text>
              <Text as="span">${movie?.budget}</Text>
            </Box>
            <Box mb={5}>
              <Text fontWeight="bold">Revenue:</Text>
              <Text as="span">${movie?.revenue}</Text>
            </Box>
            {[movie?.belongs_to_collection].map((item) => {
              return (
                <Box key={item?.id} mb={5}>
                  {item?.id ? (
                    <Text fontWeight="bold">Belong to collection:</Text>
                  ) : (
                    <Box>{""}</Box>
                  )}

                  <Text as="span">{item?.name}</Text>
                  <Image src={CollectionImg} alt="" />
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
