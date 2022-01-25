import { Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export default function LinkGrid() {
  return (
    <Flex w="50%" justify="flex-end">
      <VStack pr="5rem" width="150px">
        <Heading fontWeight="bold" size="md" mb="1rem">
          Explore
        </Heading>
        <Link variant="footerLink" as={ReactLink} to="/">
          Home
        </Link>
        <Link variant="footerLink">Movies</Link>
        <Link variant="footerLink">TV Shows</Link>
      </VStack>
      <VStack pr="5rem">
        <Heading fontWeight="bold" size="md" mb="1rem">
          Follow Us
        </Heading>
        <Link variant="footerLink" href="https://www.facebook.com/">
          Facebook
        </Link>
        <Link variant="footerLink" href="https://www.instagram.com/">
          Instagram
        </Link>
        <Link variant="footerLink" href="https://www.youtube.com/">
          Youtube
        </Link>
      </VStack>
      <VStack>
        <Heading fontWeight="bold" size="md" mb="1rem">
          Legal Stuff
        </Heading>
        <Link variant="footerLink" as={ReactLink} to="/contact-us">
          Contact Us
        </Link>
        <Link variant="footerLink" as={ReactLink} to="/privacy">
          Privacy
        </Link>
        <Link variant="footerLink" as={ReactLink} to="/terms-of-use">
          Terms of Use
        </Link>
      </VStack>
    </Flex>
  );
}
