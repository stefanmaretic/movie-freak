import { useEffect, useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { baseImageUrl } from "../services/instances";
import { useOutsideClick } from "@chakra-ui/react";

export const Search = () => {
  const apiKey = "c33b71412633be3e4a413c17428d1624";
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (searchText.length > 2) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchText}`
      )
        .then((res) => res.json())
        .then((data) => {
          setContent(data.results);
          console.log(data);
        });
    }
  }, [searchText]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(true);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      <Flex
        position="relative"
        pl={16}
        display={{ sm: "none", md: "none", lg: "none", xl: "flex" }}
      >
        <Stack w="300px">
          <InputGroup onClick={() => setIsModalOpen(true)} borderRadius={"md"}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input
              variant="filled"
              focusBorderColor="none"
              type="search"
              placeholder="Search for a movie, tv show..."
              onChange={(e) => handleOnChange(e)}
            />
          </InputGroup>
        </Stack>
        {isModalOpen ? (
          <Box
            borderRadius="5"
            boxShadow="xs"
            overflow="auto"
            position="absolute"
            zIndex="popover"
            bg="white"
            p={2}
            top="45px"
            maxH="300px"
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
            {content &&
              content.map((movie) => (
                <Box w="400px">
                  <Flex flexDir="row" p={1} alignItems="center">
                    <Image h="50px" src={baseImageUrl + movie.poster_path} />
                    <Box>
                      <Text fontWeight="bold" pl={2}>
                        {movie.title || movie.name}
                      </Text>
                      <Text pl={2}>{movie.media_type}</Text>
                    </Box>
                  </Flex>
                  <Divider />
                </Box>
              ))}
          </Box>
        ) : null}
      </Flex>
    </>
  );
};
