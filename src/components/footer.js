import { Center, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import LinkGrid from "./footer-link-grid";

export function Footer() {
  return (
    <>
      <Center bg="#E2E8F0" w="100%" position="relative" bottom="0" minH="320px">
        <Container maxW="container.lg">
          <Flex mt="5em" justify="space-between" align="center">
            <Link as={ReactLink} to="/">
              <Flex align="center">
                <Image
                  boxSize="100px"
                  src="https://i.postimg.cc/rm8LXXgw/Asset-1.png"
                ></Image>
                <Text fontWeight="bold" fontSize="2xl" pl={4}>
                  MovieFreak
                </Text>
              </Flex>
            </Link>
            <LinkGrid />
          </Flex>
          <Text fontSize="sm" mt="3em" mb="2em" float="right">
            &copy; {new Date().getFullYear()} MovieFreak, Inc. All rights
            reserved.
          </Text>
        </Container>
      </Center>
    </>
  );
}
