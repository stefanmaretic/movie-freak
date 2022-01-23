import {
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import LinkGrid from "./footer-link-grid";

export function Footer() {
  return (
    <>
      <Center bg="#E2E8F0" w="100%" position="relative" bottom="0" minH="320px">
        <Container maxW="container.xl">
          <Flex mt="3em" justify="space-between" align="center">
            <Link variant="footerLink" as={ReactLink} to="/">
              <Flex align="center">
                <Image
                  boxSize="100px"
                  src="https://i.postimg.cc/rm8LXXgw/Asset-1.png"
                  alt="Website logo"
                ></Image>
                <Text fontWeight="bold" fontSize="3xl" pl={4} pb={2}>
                  movieFreak
                </Text>
              </Flex>
            </Link>
            <LinkGrid />
          </Flex>
          <Divider m="2em 0" orientation="horizontal" borderColor="gray.400" />

          <Flex justify="space-between" align="center" mb="1em">
            <Box maxH="4em">
              <Text>Brought to you by:</Text>
              <Link href="https://www.themoviedb.org/documentation/api">
                <Image
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  m="0.5em 0"
                  maxH="20px"
                  alt="API logo"
                ></Image>
              </Link>
            </Box>
            <Text fontSize="sm">
              &copy; {new Date().getFullYear()} movieFreak, Inc. All rights
              reserved.
            </Text>
          </Flex>
        </Container>
      </Center>
    </>
  );
}
