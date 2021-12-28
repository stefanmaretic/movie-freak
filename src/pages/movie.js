import { Link, useParams } from "react-router-dom";
import { getMovie, getMovieCast } from "../services/movies";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { baseImageUrl, baseProfileImg } from "../services/instances";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  BsFillBookmarkFill,
  BsFillSuitHeartFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { Layout } from "../components/layout";
export function Movie() {
  const { movieId } = useParams();

  const { data = {} } = useQuery([queryKeys.movies, movieId], () =>
    getMovie(movieId)
  );
  const { data: cast = {} } = useQuery([queryKeys.cast, movieId], () =>
    getMovieCast(movieId)
  );

  const actors = cast?.data?.cast;
  // console.log(actors);
  const movie = data?.data;
  console.log(movie);
  const img = baseImageUrl + movie?.poster_path;
  const vote = movie?.vote_average * 10;
  const time = movie?.runtime;
  const genres = movie?.genres;

  return (
    <>
      <Layout>
        <Box
          backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1)),
          url(${baseImageUrl + movie?.backdrop_path})`}
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
                <Image w="300px" h="400px" src={img} alt={movie?.title} />
              </Box>
              <Box w="920px" ml="10">
                <Flex align="center">
                  <Heading>{movie?.title}</Heading>
                  <Text color="gray.300" ml={2} fontSize="3xl">
                    ({new Date(movie?.release_date).getFullYear()})
                  </Text>
                </Flex>
                <Flex mb={2} align="center">
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
                          key={genre?.id}
                        >
                          <Box ml={2}>{genre?.name},</Box>
                        </Box>
                      );
                    })}
                  </Text>
                  <Text fontSize="sm" ml={2} color="#ccc">
                    {time} minutes.
                  </Text>
                </Flex>
                <Flex align="center">
                  <Text fontWeight="bold" pl={2} pb={2}>
                    <CircularProgress value={vote} color="green.400">
                      <CircularProgressLabel>
                        {movie?.vote_average}
                      </CircularProgressLabel>
                    </CircularProgress>
                    <Box as="span" ml={2}>
                      Vote average
                    </Box>
                  </Text>
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
                  {movie?.tagline}
                </Text>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  OVERVIEW:
                </Text>
                <Box fontSize="ig">{movie?.overview}</Box>
              </Box>
            </Flex>
          </Box>
        </Box>
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
                {actors?.slice(0, 21).map((actor) => (
                  <>
                    <Box key={actor?.id} minW="200px" minH="266px">
                      <Image
                        w="150px"
                        h="200px"
                        bgColor="gray"
                        // src="https://centrefordigestivediseases.com/wp-content/uploads/2017/10/team-member-avatar-300x390.png"
                        src={baseProfileImg + actor.profile_path}
                        alt=""
                        onerror="this.onerror=null this.src='http://example.com/existent-image.jpg' "
                      />
                      <Text fontWeight="bold">{actor.name}</Text>
                      <Text>{actor.character}</Text>
                    </Box>
                  </>
                ))}
              </HStack>
            </Box>
          </Box>
          <Box mt={10} ml={40}>
            <HStack gap={5} mb={8}>
              <Link to="/#">
                <Icon as={BsInstagram} />
              </Link>
              <Link to="/#">
                <Icon as={BsFacebook} />
              </Link>
              <Link to="/#">
                <Icon as={BsTwitter} />
              </Link>
              <Link to="/#">
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
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
