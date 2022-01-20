import React from "react";
import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { getMovie } from "../services/movies";
import { baseImageUrl } from "../services/instances";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { BsFillBookmarkFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useParams } from "react-router-dom";
export const MovieDetails = () => {
  const { movieId } = useParams();

  const { data = {} } = useQuery([queryKeys.movies, movieId], () =>
    getMovie(movieId)
  );
  const movie = data?.data;
  const genres = movie?.genres;
  const img = baseImageUrl + movie?.poster_path;
  const time = movie?.runtime;
  const vote = movie?.vote_average * 10;

  return (
    <Box
      backgroundImage={[
        `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1)),
          url(${baseImageUrl + movie?.backdrop_path})`,
      ]}
      position="relative"
      bgPosition="center"
      bgSize="cover"
      w={["100%", "100%", "100%", "100%"]}
      h="80vh"
      color="#fff"
      overflow="auto"
    >
      <Box pt={["10", "10", "20", "20"]}>
        <Flex direction={["column", "column", "row", "row"]}>
          <Box ml="10" display={["none", "block", "block", "block"]}>
            <Image
              w={[null, "120x", "300px", "300px"]}
              h={[null, "160px", "440px", "440px"]}
              src={img}
              alt={movie?.title}
            />
          </Box>
          <Box w={["300px", "420px", "900px", "900px"]} ml="10">
            <Flex mb={1} align="center">
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
            <Flex
              mb={2}
              align={["flex-start", "center", "center", "center"]}
              direction={["column", "row", "row", "row"]}
            >
              <Text fontSize="sm" color="gray.300">
                {movie?.release_date}
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
                      <Box ml={[0, 2, 2, 2]}>{genre.name},</Box>
                    </Box>
                  );
                })}
              </Text>
              <Text fontSize="sm" ml={[0, 2, 2, 2]} color="#ccc">
                {time} minutes.
              </Text>
            </Flex>

            <Flex align="center">
              <Box
                display={["none", "none", "block", "block"]}
                fontWeight="bold"
                pl={2}
                pb={[1, 1, 2, 2]}
              >
                <CircularProgress value={vote} color="green.400">
                  <CircularProgressLabel>
                    {movie?.vote_average}
                  </CircularProgressLabel>
                </CircularProgress>
                <Text
                  as="span"
                  fontSize={["xs", "xs", "md", "md"]}
                  ml={[0, 0, 2, 2]}
                >
                  Vote average
                </Text>
              </Box>
              <HStack
                ml={6}
                gap={4}
                display={["none", "none", "block", "block"]}
              >
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

            <Text fontSize="ig" mb={2} color="#fff">
              {movie?.tagline}
            </Text>

            <Text
              fontSize={["md", "md", "xl", "xl"]}
              fontWeight="bold"
              mb={[1, 1, 2, 2]}
            >
              OVERVIEW:
            </Text>

            <Box fontSize={["xs", "xs", "md", "md"]} mr={10}>
              {movie?.overview}
            </Box>
          </Box>
        </Flex>
        <Box
          display={["block", "block", "none", "none"]}
          fontWeight="bold"
          pb={[1, 1, 2, 2]}
          ml="8"
          mt="2"
        >
          <CircularProgress value={vote} color="green.400">
            <CircularProgressLabel>{movie?.vote_average}</CircularProgressLabel>
          </CircularProgress>
          <Text as="span" fontSize="xs" ml={2}>
            Vote average
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
