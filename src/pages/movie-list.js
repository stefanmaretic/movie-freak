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
import { Link } from "react-router-dom";

export default function MovieList() {
  const [filterByGenre, setFilterByGenre] = useState([]);
  const [sortBy, setSortBy] = useState([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [queryKeys.pages, filterByGenre, sortBy],
      fetchMore(filterByGenre, sortBy),
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

  const handleDropDownChange = (e) => {
    setSortBy(e.target.value);
  };
  const pages = data?.pages?.map((page) => page?.data?.total_results);
  return (
    <>
      <Layout>
        <Container mt={12} maxW="container.xl">
          <Grid templateColumns={{ md: "repeat(10,1fr)" }} gap={4}>
            <Box p={6} rounded="md" boxShadow="lg" h="600px" w="300px">
              <Box pb={6}>
                <Text mb={3} fontSize="lg" fontWeight="bold">
                  Sort By
                </Text>
                <Divider mb={3} />

                <Text mb={3} fontSize="md">
                  Sort Results By:
                </Text>
                <Select onChange={(e) => handleDropDownChange(e)}>
                  <option value="popularity.desc">Popularity Descending</option>
                  <option value="popularity.asc">Popularity Ascending</option>
                  <option value="vote_average.desc">Rating Descending</option>
                  <option value="vote_average.asc">Rating Ascending</option>
                  <option value="primary_release_date.desc">
                    Release Date Descending
                  </option>
                  <option value="original_title.asc">Title (A-Z)</option>
                  <option value="original_title.desc">Title (Z-A)</option>
                </Select>
              </Box>
              <Text mb={3} fontSize="lg" fontWeight="bold">
                Categories
              </Text>
              <Divider mb={3} />

              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {genres?.map((genre) => (
                  <Checkbox
                    key={genre.id}
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
              <Grid
                templateColumns={{
                  lg: "repeat(3, 1fr)",
                  md: "repeat(2, 1fr)",
                  sm: "repeat(1, 1fr)",
                }}
                gap={4}
              >
                {data?.pages?.map((page) =>
                  page.data?.results?.map((movie) => (
                    <GridItem key={movie.id}>
                      <Link to={`/movie/${movie.id}`}>
                        <MovieCard
                          title={movie.title || movie.name}
                          image={movie.poster_path}
                          rating={movie.vote_average}
                          year={movie.release_date || movie.first_air_date}
                        />
                      </Link>
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
