import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
} from "@chakra-ui/react";
import { MovieCard } from "../components/movie-card";
import { queryKeys } from "../config/query-keys";
import { useInfiniteQuery } from "react-query";
import { fetchMore, getGenreList } from "../services/movies";
import { Layout } from "../components/layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ScrollToTop from "../components/scroll-to-top";
import { useQuery } from "react-query";
import { useState } from "react";

export default function MovieList() {
  const [filterByGenre, setFilterByGenre] = useState([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [queryKeys.pages, filterByGenre],
      fetchMore(filterByGenre, "32"),
      {
        getNextPageParam: (_lastPage, pages) => pages.length + 1,
      }
    );

  const genreList = useQuery(queryKeys.genreList, getGenreList);
  const genres = genreList?.data?.data?.genres;

  function onClickGenre(genre) {
    let newGenres = [];
    const found = filterByGenre.find((g) => g === genre.id);
    if (found) {
      newGenres = filterByGenre.filter((genre) => genre !== found);
    } else {
      newGenres = [...filterByGenre, genre.id];
    }
    setFilterByGenre(newGenres);
  }

  const pages = data?.pages?.map((page) => page?.data?.total_results);
  return (
    <>
      <Layout>
        <Container maxW="container.xl">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(10,9fr)"
            gap={4}
          >
            <Box
              p={6}
              rounded="md"
              boxShadow="lg"
              rowSpan={2}
              colSpan={2}
              h="600px"
              w="300px"
            >
              <Box pb={6}>
                <Text mb={3} fontSize="lg" fontWeight="bold">
                  Sort By
                </Text>
                <Divider mb={3} />
                <Text mb={3} fontSize="md">
                  Sort Results By:
                </Text>
                <Select placeholder="Select option">
                  <option value="option1">Popularity Descending</option>
                  <option value="option2">Popularity Ascending</option>
                  <option value="option3">Release Date Descending</option>
                  <option value="option4">Title (A-Z)</option>
                  <option value="option5">Title (Z-A)</option>
                </Select>
              </Box>
              <Text mb={3} fontSize="lg" fontWeight="bold">
                Categories
              </Text>
              <Divider mb={3} />

              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {genres?.map((genre) => (
                  <Checkbox
                    onChange={() => onClickGenre(genre)}
                    colorScheme="yellow"
                    value={genre.id}
                  >
                    {genre.name}
                  </Checkbox>
                ))}
              </Grid>
            </Box>
            <GridItem rowSpan={2} colSpan={8}>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {data?.pages?.map((page) =>
                  page.data?.results?.map((movie) => (
                    <GridItem key={movie.id}>
                      <MovieCard
                        title={movie.title || movie.name}
                        image={movie.poster_path}
                        rating={movie.vote_average}
                        year={movie.release_date || movie.first_air_date}
                      />
                    </GridItem>
                  ))
                )}
              </Grid>
              <Button
                isDisabled={pages < 20}
                mt={6}
                w="100%"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="yellow"
                onClick={() => fetchNextPage()}
              >
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
              </Button>
            </GridItem>
          </Grid>
        </Container>
        <Flex justify="end" position="sticky" bottom={10} mr={10}>
          <ScrollToTop />
        </Flex>
      </Layout>
    </>
  );
}
