import React from "react";
import "./movie-card.css";
import { imageUrl } from "../../services/instances";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'


const MovieCard = (props) => {
  console.log(props.image);
  const bg = imageUrl + props.image;
  return (
    <>
      <div
        className="movie-card"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="title-container">
          <Text color="#ffc000" pl={6} pt={4}>
            {props.year.slice(0, 4)}
          </Text>
          <Heading size="md" isTruncated pl={6} >
            {props.title}
          </Heading>
          <Flex alignItems="center" color="#ffc000" pt={1}>
            <Icon as={StarIcon} ml={6} />
            <Text fontWeight='bold' pl={2}>{props.rating + "/10"}</Text>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
