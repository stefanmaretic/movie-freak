import { Box } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";
import { ScrollToTopButton } from "./scroll-to-top2";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box minH="calc(100vh - 400px)">{children}</Box>
      <Box
        position="fixed"
        bottom="10rem"
        right="7rem"
        opacity="75%"
        zIndex="1"
      >
        <ScrollToTopButton />
      </Box>
      <Footer />
    </>
  );
};
