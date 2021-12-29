import { useQuery } from "react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/layout";
import { queryKeys } from "../config/query-keys";
import {
  getTvShows,
  getTvShowsCast,
  getTvShowsRecom,
} from "../services/tv-shows";
import { baseImageUrl, baseProfileImg } from "../services/instances";
import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { GoHome } from "react-icons/go";

import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { BsFillBookmarkFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

import { MovieCard } from "../components/movie-card";
export default function Shows() {
  const { tvId } = useParams();

  const { data = {} } = useQuery([queryKeys.tvshows, tvId], () =>
    getTvShows(tvId)
  );
  const { data: tvShowCast = {} } = useQuery([queryKeys.tvShowCast, tvId], () =>
    getTvShowsCast(tvId)
  );
  const tvShowActors = tvShowCast?.data?.cast;

  const { data: tvShowRecom = {} } = useQuery(
    [queryKeys.tvShowRecom, tvId],
    () => getTvShowsRecom(tvId)
  );
  const tvRecom = tvShowRecom?.data;

  const tvShows = data?.data;
  console.log(tvShows);
  const genres = tvShows?.genres;
  const img = baseImageUrl + tvShows?.poster_path;
  const time = tvShows?.episode_run_time;
  const vote = tvShows?.vote_average * 10;

  return (
    <Layout>
      <Box
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1)),
          url(${baseImageUrl + tvShows?.backdrop_path})`}
        position="relative"
        bgPosition="center"
        bgSize="cover"
        w="100%"
        h="80vh"
        color="#fff"
      >
        <Box pt="20">
          <Flex>
            <Box ml="10">
              <Image w="300px" h="440px" src={img} alt={tvShows?.name} />
            </Box>
            <Box w="920px" ml="10">
              <Flex align="center">
                <Heading>{tvShows?.name}</Heading>
                <Text color="gray.300" ml={2} fontSize="3xl">
                  ({new Date(tvShows?.first_air_date).getFullYear()})
                </Text>
              </Flex>
              <Flex mb={2} align="center">
                <Text fontSize="sm" color="gray.300">
                  {tvShows?.first_air_date}
                </Text>
                <Text>
                  {genres?.map((genre) => {
                    return (
                      <Box
                        display="inline-flex"
                        fontSize="sm"
                        color="#ccc"
                        key={genre.id}
                      >
                        <Box ml={2}>{genre.name},</Box>
                      </Box>
                    );
                  })}
                </Text>
                <Text fontSize="sm" ml={2} color="#ccc">
                  {time} minutes.
                </Text>
              </Flex>
              <Flex align="center">
                <Box fontWeight="bold" pl={2} pb={2}>
                  <CircularProgress value={vote} color="green.400">
                    <CircularProgressLabel>
                      {tvShows?.vote_average}
                    </CircularProgressLabel>
                  </CircularProgress>
                  <Text as="span" ml={2}>
                    Vote average
                  </Text>
                </Box>
                <HStack ml={6} gap={4}>
                  <Button
                    _hover={{ bg: "transparent" }}
                    borderRadius="50%"
                    bgColor="blue.900"
                  >
                    <Icon as={FaListUl} w={3} />
                  </Button>

                  <Button
                    _hover={{ bg: "transparent" }}
                    borderRadius="50%"
                    bgColor="blue.900"
                  >
                    <StarIcon w={3} />
                  </Button>
                  <Button
                    _hover={{ bg: "transparent" }}
                    borderRadius="50%"
                    bgColor="blue.900"
                  >
                    <Icon as={BsFillBookmarkFill} w={3} />
                  </Button>
                  <Button
                    _hover={{ bg: "transparent" }}
                    borderRadius="50%"
                    bgColor="blue.900"
                  >
                    <Icon w={3} as={BsFillSuitHeartFill} />
                  </Button>
                </HStack>
              </Flex>
              <Text fontSize="ig" mb={2} color="gray.300">
                {tvShows?.tagline}
              </Text>
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                OVERVIEW:
              </Text>
              <Box fontSize="ig">{tvShows?.overview}</Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex>
        <Box m={(10, 10)}>
          <Heading>TvShow Cast</Heading>
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
              {tvShowActors?.slice(0, 21).map((actor) => (
                <>
                  <Box key={actor?.id} minW="200px" minH="266px">
                    {actor?.profile_path ? (
                      <Image
                        w="150px"
                        h="200px"
                        maxH="200px"
                        minH="200px"
                        src={baseProfileImg + actor.profile_path}
                        alt={actor.name}
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

                    {actor.roles.map((role) => (
                      <Box maxW="150px" key={role.id}>
                        <Text>{role.character}</Text>
                      </Box>
                    ))}
                  </Box>
                </>
              ))}
            </HStack>
          </Box>

          <Box mt={20}>
            <Heading>Related TvShows</Heading>

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
                {tvRecom?.results.map((result) => {
                  return (
                    <Box key={result.id} minW="160px" minH="266px">
                      <Link to={`/tv/${result.id}`}>
                        <MovieCard
                          title={result.name}
                          image={result.poster_path}
                          rating={result.vote_average}
                          year={result.first_air_date}
                        />
                      </Link>
                    </Box>
                  );
                })}
              </HStack>
            </Box>
          </Box>
        </Box>
        <Box mt={10} mr={10} ml={40}>
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
            <Text as="span">{tvShows?.original_name}</Text>
          </Box>
          <Box mb={5}>
            <Text fontWeight="bold">Status:</Text>
            <Text as="span">{tvShows?.status}</Text>
          </Box>
          <Box mb={5}>
            <Text fontWeight="bold">Original language:</Text>
            <Text as="span">{tvShows?.original_language}</Text>
          </Box>
          <Box mb={5}>
            <Text fontWeight="bold">
              Number of season:{" "}
              <Text as="span">{tvShows?.number_of_seasons}</Text>
            </Text>
          </Box>
          <Box mb={5}>
            <Text fontWeight="bold">
              Number of episodes:{" "}
              <Text as="span">{tvShows?.number_of_episodes}</Text>
            </Text>
          </Box>
          {[tvShows?.belongs_to_collection].map((item) => {
            return (
              <Box></Box>
              // <Box key={item?.id} mb={5}>
              //   {item?.id ? (
              //     <Text fontWeight="bold">Belong to collection:</Text>
              //   ) : (
              //     <Box>{""}</Box>
              //   )}

              //   <Text as="span">{item?.name}</Text>
              //   <Image mt={2} src={CollectionImg} alt="" />
              // </Box>
            );
          })}
        </Box>
      </Flex>
    </Layout>
  );
}
