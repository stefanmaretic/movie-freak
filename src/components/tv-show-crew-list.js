import { Box, Heading, Image, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { baseProfileImg, baseImageUrl } from "../services/instances";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function TvShowCrewList({
  tvShowsCrew = {},
  tvShowInfo = {},
  tvShowCast = {},
}) {
  console.log(tvShowCast);
  const uniqUsers = Array.from(
    tvShowsCrew.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()
  );
  return (
    <Box w="100%" minH="100vh" bgColor="lightsteelblue">
      <Box bgColor="black" w="100%" h="160px" py="12px" px="24px" color="#fff">
        {[tvShowInfo].map((tvShow) => (
          <Flex align="center">
            <Image
              src={baseImageUrl + tvShow.poster_path}
              alt=""
              h="140px"
              w="110px"
            />
            <Box ml={4}>
              <Flex align="center">
                <Heading fontSize={["ig", "ig", "3xl", "3xl"]}>
                  {tvShow?.name}
                </Heading>
                <Text
                  color="gray.300"
                  ml={[1, 1, 2, 2]}
                  fontSize={["ig", "ig", "3xl", "3xl"]}
                >
                  ({new Date(tvShow?.first_air_date).getFullYear()})
                </Text>
              </Flex>
              <Link to={`/tv/${tvShow.id}`} textDecoration="none">
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
              {uniqUsers.length}
            </Text>
          </Heading>

          {uniqUsers.map((crew) => (
            <Flex mb={4} align="center">
              {crew.profile_path ? (
                <Image
                  src={baseProfileImg + crew.profile_path}
                  alt={crew.name}
                  w="140px"
                  h="150px"
                  borderRadius="10px"
                />
              ) : (
                <Image
                  src="https://centrefordigestivediseases.com/wp-content/uploads/2017/10/team-member-avatar-300x390.png"
                  alt={crew.name}
                  w="140px"
                  h="150px"
                  borderRadius="10px"
                />
              )}
              <Box ml={2}>
                <Text fontWeight="bold">{crew.name}</Text>
                <Text>{crew.job}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box ml="200px" mt={10}>
          <Heading mb={4}>
            Cast{" "}
            <Text as="span" color="gray.500">
              {tvShowCast.slice(0, 50).length}
            </Text>
          </Heading>
          {tvShowCast?.slice(0, 50).map((actor) => (
            <Flex mb={4} align="center">
              {actor.profile_path ? (
                <Image
                  src={baseProfileImg + actor.profile_path}
                  alt={actor.name}
                  w="140px"
                  h="150px"
                  borderRadius="10px"
                />
              ) : (
                <Image
                  src="https://centrefordigestivediseases.com/wp-content/uploads/2017/10/team-member-avatar-300x390.png"
                  alt={actor.name}
                  w="140px"
                  h="150px"
                  borderRadius="10px"
                />
              )}
              <Box ml={2} maxH="100px" overflow="auto">
                <Text fontWeight="bold">{actor.name}</Text>
                {actor.roles.map((role) => (
                  <Box maxW="150px" key={role.id}>
                    <Text fontSize="16px">{role.character}</Text>
                  </Box>
                ))}
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
