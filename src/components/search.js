import { useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Input,
  InputGroup,
  Stack,
  Divider,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { baseImageUrl } from "../services/instances";
import { useOutsideClick } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { queryKeys } from "../config/query-keys";
import { searchByQuery } from "../services/search";
import { useDebounce } from "../hooks/useDebounce";

const ListboxItemEmpty = () => {
  return (
    <Box
      w="400px"
      _hover={{
        bg: "gray.100",
      }}
    >
      <Flex flexDir="row" p={1} alignItems="center">
        <Box>
          <Text fontWeight="bold" pl={2}>
            There are no search results.
          </Text>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
};

const ListboxItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Box
        w="400px"
        _hover={{
          bg: "gray.100",
        }}
      >
        <Flex flexDir="row" p={1} alignItems="center">
          <Image
            fallbackSrc="https://via.placeholder.com/25x38"
            h="38px"
            src={baseImageUrl + movie.poster_path}
          />

          <Box>
            <Text fontWeight="bold" pl={2}>
              {movie.title || movie.name}
            </Text>
            <Text pl={2}>{movie.media_type}</Text>
          </Box>
        </Flex>

        <Divider />
      </Box>
    </Link>
  );
};

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  const { data, isFetching } = useQuery(
    [queryKeys.search, debouncedSearchText],

    () => searchByQuery(debouncedSearchText),
    { enabled: !!debouncedSearchText }
  );

  const items = data?.data;

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const clearInput = () => {
    setSearchText("");
  };

  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(true);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      <Flex>
        <Stack w="100%">
          <InputGroup onClick={() => setIsModalOpen(true)} borderRadius={"md"}>
            <Input
              minW="300px"
              borderRadius={6}
              p={2}
              bg="gray.50"
              _focus={{ bg: "white", borderColor: "yellow.400" }}
              value={searchText}
              variant="flushed"
              focusBorderColor="none"
              type="text"
              placeholder="Search for a movie, tv show..."
              onChange={(e) => handleOnChange(e)}
            />
            <InputRightElement>
              {" "}
              {searchText === null ? (
                <SearchIcon />
              ) : (
                <SmallCloseIcon onClick={clearInput} />
              )}{" "}
            </InputRightElement>
          </InputGroup>
        </Stack>
        {isModalOpen && searchText ? (
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
            {items?.results?.length > 0 ? (
              items?.results?.map((movie) => (
                <ListboxItem key={movie.id} movie={movie} />
              ))
            ) : (
              <Text fontWeight="bold">
                {isFetching ? "Searching..." : <ListboxItemEmpty />}
              </Text>
            )}
          </Box>
        ) : null}
      </Flex>
    </>
  );
};
