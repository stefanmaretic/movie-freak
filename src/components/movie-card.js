import React from "react";
import { baseImageUrl } from "../services/instances";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const MovieCard = (props) => {
  const bg = baseImageUrl + props.image;
  return (
    <>
      <Box
        color="white"
        backgroundImage={`url(${bg})`}
        bgPosition="top"
        position="relative"
        pt="160%"
        backgroundSize="cover"
        borderRadius={10}
      >
        <Box
          position="absolute"
          h="110px"
          bottom="0"
          left="0"
          w="100%"
          borderRadius={10}
          bg="rgba(0,0,0,0.7)"
        >
          <Text color="yellow.400" pl={6} pt={4}>
            {new Date(props.year).getFullYear()}
          </Text>
          <Heading size="md" isTruncated pl={6}>
            {props.title}
          </Heading>
          <Flex alignItems="center" color="yellow.400" pt={1}>
            <Icon as={StarIcon} ml={6} />
            <Text fontWeight="bold" pl={2}>
              {props.rating + "/10"}
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
