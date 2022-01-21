import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export function Footer() {
  return (
    <>
      <Center bg="lightgray" w="100%" position="relative" bottom="0">
        <Container maxW="container.lg">
          <Flex mt="50px" justify="space-between" align="center">
            <Link href="/">
              <Flex align="center">
                <Image
                  boxSize="100px"
                  src="https://i.postimg.cc/rm8LXXgw/Asset-1.png"
                ></Image>
                <Text fontWeight="bold" fontSize="2xl" pl={4} mt="-10px">
                  MovieFreak
                </Text>
              </Flex>
            </Link>

            <Flex w="50%" justify="space-between">
              <VStack>
                <Text fontWeight="bold">Explore</Text>
                <Link href="/">Home</Link>
                <Link>Movies</Link>
                <Link>TV Shows</Link>
              </VStack>
              <VStack>
                <Text fontWeight="bold">Follow Us</Text>
                <Link href="https://www.facebook.com/">😣 Facebook</Link>
                <Link href="https://www.instagram.com/">🙃 Instagram</Link>
                <Link href="https://www.youtube.com/">😶 Youtube</Link>
              </VStack>
              <VStack>
                <Text fontWeight="bold">Legal Stuff</Text>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms-of-use">Terms of Use</Link>
              </VStack>
            </Flex>
          </Flex>
          <Box mt="30px" mb="30px" float="right">
            <p>© 1995 - 2022 Movie Freak, Davon Inc.</p>
          </Box>
        </Container>
      </Center>
    </>
  );
}
