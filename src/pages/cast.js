import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiImdb } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import {
  getActors,
  getActorsCredits,
  getActorsSocial,
} from "../services/movies";
import { queryKeys } from "../config/query-keys";
import { useQuery } from "react-query";
import { baseActorImg } from "../services/instances";
import { Layout } from "../components/layout";
import ScrollToTop from "../components/scroll-to-top";

export default function Cast() {
  const { castId } = useParams();
  const { data: actors = {} } = useQuery([queryKeys.cast, castId], () =>
    getActors(castId)
  );
  const { data: knownFor = {} } = useQuery(
    [queryKeys.combinedCredits, castId],
    () => getActorsCredits(castId)
  );
  const { data: socialLinks = {} } = useQuery(
    [queryKeys.externalIds, castId],
    () => getActorsSocial(castId)
  );
  const actor = actors?.data;
  const creditsList = knownFor?.data;
  const actorImg = baseActorImg + actor?.profile_path;
  const social = socialLinks?.data;
  return (
    <Layout>
      <Container maxW="container.xl" mt={16}>
        <Box display={{ md: "flex" }} gap={6}>
          <Box w="100%" maxW={{ md: "350px" }}>
            <Box pb={12} overflow="hidden" borderRadius="lg" boxShadow="lg">
              <Image
                fallbackSrc="https://via.placeholder.com/358x537"
                src={actorImg}
              />
              <Wrap mt={2} spacing="20px" display="flex" p={4}>
                {social?.instagram_id ? (
                  <a href={`https://www.instagram.com/${social?.instagram_id}`}>
                    <Box _hover={{ color: "yellow.400" }}>
                      {" "}
                      <BsInstagram size={24} />
                    </Box>
                  </a>
                ) : null}
                {social?.facebook_id ? (
                  <a href={`https://www.facebook.com/${social?.facebook_id}`}>
                    <Box _hover={{ color: "yellow.400" }}>
                      {" "}
                      <BsFacebook size={24} />
                    </Box>
                  </a>
                ) : null}
                {social?.twitter_id ? (
                  <a href={`https://www.twitter.com/${social?.twitter_id}`}>
                    <Box _hover={{ color: "yellow.400" }}>
                      <BsTwitter size={24} />
                    </Box>
                  </a>
                ) : null}
                {social?.imdb_id ? (
                  <a href={`https://www.imdb.com/name/${social?.imdb_id}`}>
                    <Box _hover={{ color: "yellow.400" }}>
                      {" "}
                      <SiImdb size={24} />
                    </Box>
                  </a>
                ) : null}
              </Wrap>

              <Divider mt={2} mb={2} />
              <Stack p={4}>
                <Text fontWeight="bold" fontSize="1.2em">
                  Personal Info
                </Text>
                <Box pt={2}>
                  <Text fontWeight="bold">Known For: </Text>
                  <Text> {actor?.known_for_department}</Text>
                </Box>
                <Box pt={2}>
                  <Text fontWeight="bold">Gender: </Text>
                  <Text> {actor?.gender === 2 ? "Male" : "Female"}</Text>
                </Box>
                <Box pt={2}>
                  <Text fontWeight="bold">Birthdate: </Text>
                  <Text>
                    {" "}
                    {actor?.birthday} (
                    {new Date().getFullYear() -
                      new Date(actor?.birthday).getFullYear() +
                      " years old"}
                    )
                  </Text>
                </Box>
                <Box pt={2}>
                  <Text fontWeight="bold">Place Of Birth: </Text>
                  <Text> {actor?.place_of_birth}</Text>
                </Box>
              </Stack>
            </Box>
          </Box>

          <Box w="100%">
            <Box p={6} borderRadius="lg" boxShadow="xl">
              <Heading as="h2">{actor?.name}</Heading>
              <Text fontSize="xl">Biography</Text>
              <Text mb={12} mt="24px" lineHeight="20px" font fontSize="md">
                {actor?.biography}
              </Text>
              <Tabs>
                <TabList>
                  <Tab _selected={{ color: "white", bg: "yellow.400" }}>
                    Casting
                  </Tab>
                  <Tab _selected={{ color: "white", bg: "yellow.400" }}>
                    Credits
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Box w="100%">
                      <Box>
                        <Text mb={4} fontSize={18} fontWeight="bold">
                          Known For:
                        </Text>
                        {creditsList?.cast?.map((credits) => (
                          <Wrap
                            _hover={{
                              backgroundColor: "gray.50",
                            }}
                            id={credits.id}
                            p={4}
                            alignItems="center"
                            display="flex"
                            borderBottom="1px"
                            borderColor="gray.100"
                          >
                            <Box>
                              {!credits?.release_date ||
                              !credits?.first_air_date === ""
                                ? "——"
                                : new Date(
                                    credits.release_date ||
                                      credits.first_air_date
                                  ).getFullYear()}
                            </Box>
                            <Box
                              _hover={{
                                color: "yellow.400",
                              }}
                              fontSize={15}
                              fontWeight="bold"
                              pl={4}
                            >
                              {credits?.title ? (
                                <Link
                                  _hover={{
                                    background: "white",
                                    color: "teal.500",
                                  }}
                                  to={`/movie/${credits.id}`}
                                >
                                  {credits?.title || credits?.name}
                                </Link>
                              ) : (
                                <Link to={`/tv/${credits.id}`}>
                                  {credits?.title || credits?.name}
                                </Link>
                              )}
                            </Box>

                            {credits?.media_type === "tv" ? (
                              <Box color="gray" fontSize={14}>
                                ({+credits?.episode_count + " episodes"})
                              </Box>
                            ) : null}
                            {credits?.character ? (
                              <Box color="gray.600" fontSize={15}>
                                as {credits?.character}
                              </Box>
                            ) : null}
                          </Wrap>
                        ))}
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Text mb={4} fontSize={18} fontWeight="bold">
                      Known For:
                    </Text>
                    {creditsList?.crew?.map((crew) => (
                      <Wrap
                        _hover={{
                          backgroundColor: "gray.50",
                        }}
                        id={crew.id}
                        p={4}
                        alignItems="center"
                        display="flex"
                        borderBottom="1px"
                        borderColor="gray.100"
                      >
                        <Box>
                          {!crew?.release_date || !crew?.first_air_date === ""
                            ? "——"
                            : new Date(
                                crew.release_date || crew.first_air_date
                              ).getFullYear()}
                        </Box>
                        <Box
                          _hover={{
                            color: "yellow.400",
                          }}
                          fontSize={15}
                          fontWeight="bold"
                          pl={4}
                        >
                          {crew?.title ? (
                            <Link to={`/movie/${crew.id}`}>
                              {crew?.title || crew?.name}
                            </Link>
                          ) : (
                            <Link to={`/tv/${crew.id}`}>
                              {crew?.title || crew?.name}
                            </Link>
                          )}
                        </Box>

                        <Box color="gray.600" fontSize={15}>
                          as {crew?.job}
                        </Box>
                      </Wrap>
                    ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Container>
      <Flex justify="end" position="sticky" bottom={10} mr={10}>
        <ScrollToTop />
      </Flex>
    </Layout>
  );
}
