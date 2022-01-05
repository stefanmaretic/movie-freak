import { useQuery } from "react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/layout";
import { queryKeys } from "../config/query-keys";

import {
  getTvShows,
  getTvShowsCast,
  getTvShowsRecom,
  getTvShowsCrew,
} from "../services/tv-shows";
import { baseProfileImg } from "../services/instances";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { GoHome } from "react-icons/go";

import { MovieCard } from "../components/movie-card";
import TvShowDetails from "../components/tv-show-details";
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

  const { data: tvShowCrew = {} } = useQuery([queryKeys.tvShowCrew, tvId], () =>
    getTvShowsCrew(tvId)
  );
  const tvCrew = tvShowCrew?.data?.crew;

  return (
    <Layout>
      <TvShowDetails />
      <Flex direction={["column", "column", "column", "row"]}>
        <Box m={[null, null, (10, 10), (10, 10)]}>
          <Heading mt={10}>TvShow Cast</Heading>
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
                  <Box key={actor?.id} minW="200px" h="266px">
                    {actor?.profile_path ? (
                      <Image
                        w="150px"
                        h="200px"
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
                        <Text fontSize="12px">{role.character}</Text>
                      </Box>
                    ))}
                  </Box>
                </>
              ))}
            </HStack>
          </Box>
          <Link
            to="/tvshow-full-crew"
            state={{ tvCrew, tvShows, tvShowActors }}
          >
            <Button mt={10} size="sm" colorScheme="blackAlpha" variant="solid">
              Click here to see full crew & cast
            </Button>
          </Link>
          <Box mt={10}>
            <Heading>Related TvShows</Heading>

            <Box
              borderRadius="5"
              boxShadow="xl"
              overflow="auto"
              zIndex="popover"
              bg="white"
              p={2}
              cursor="pointer"
              w={"720px"}
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
        <Box
          w={["90vw", "90vw", null, null]}
          mt={10}
          mr={10}
          ml={[null, null, 40, 40]}
        >
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
        </Box>
      </Flex>
    </Layout>
  );
}
