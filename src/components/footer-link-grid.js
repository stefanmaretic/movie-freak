import { extendTheme, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const theme = extendTheme({
  components: {
    Link: {
      defaultProps: {
        color: "green",
      },
    },
  },
});

export default function LinkGrid() {
  return (
    <Flex w="50%" justify="space-between" theme={theme}>
      <VStack>
        <Heading fontWeight="bold" size="md" mb="1em">
          Explore
        </Heading>
        <Link as={ReactLink} to="/">
          Home
        </Link>
        <Link>Movies</Link>
        <Link>TV Shows</Link>
      </VStack>
      <VStack>
        <Heading fontWeight="bold" size="md" mb="1em">
          Follow Us
        </Heading>
        <Link as={ReactLink} to="https://www.facebook.com/">
          Facebook
        </Link>
        <Link as={ReactLink} to="https://www.instagram.com/">
          Instagram
        </Link>
        <Link as={ReactLink} to="https://www.youtube.com/">
          Youtube
        </Link>
      </VStack>
      <VStack>
        <Heading fontWeight="bold" size="md" mb="1em">
          Legal Stuff
        </Heading>
        <Link as={ReactLink} to="/contact-us">
          Contact Us
        </Link>
        <Link as={ReactLink} to="/privacy">
          Privacy
        </Link>
        <Link as={ReactLink} to="/terms-of-use">
          Terms of Use
        </Link>
      </VStack>
    </Flex>
  );
}
