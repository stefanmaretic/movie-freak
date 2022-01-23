import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import ScrollToTop from "../components/scroll-to-top";
import { queryKeys } from "../config/query-keys";
import { baseActorImg } from "../services/instances";
import { fetchMoreActors } from "../services/movies";

export default function People() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery([queryKeys.pages, fetchMoreActors], fetchMoreActors, {
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    });
  return (
    <Layout>
      <Container maxW="container.xl" mt={16}>
        <Grid
          templateColumns={{
            lg: "repeat(5, 1fr)",
            md: "repeat(4, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          {data?.pages?.map((page) =>
            page.data?.results?.map((actor) => (
              <Link to={`/cast/${actor.id}`}>
                <GridItem
                  rounded="lg"
                  boxShadow="md"
                  overflow="hidden"
                  w="100%"
                  key={actor.id}
                >
                  <Box position="relative">
                    <Image src={baseActorImg + actor.profile_path} />
                    <Text
                      p={3}
                      fontWeight="bold"
                      position="absolute"
                      bottom="0"
                      left="0"
                      w="100%"
                      fontSize={16}
                      color="white"
                      bg="rgba(0,0,0,0.7)"
                    >
                      {actor.name}
                    </Text>
                  </Box>
                </GridItem>
              </Link>
            ))
          )}
        </Grid>
        <Button
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
      </Container>
      <Flex justify="end" position="sticky" bottom={10} mr={10}>
        <ScrollToTop />
      </Flex>
    </Layout>
  );
}
