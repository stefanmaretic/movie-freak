import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import {
  Text,
  Box,
  Image,
  Container,
  Flex,
  Menu,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search } from "./search";

const navItems = [
  {
    label: "Movies",
    href: "movie-list",
  },
  {
    label: "Tv Shows",
    href: "tv-show-list",
  },
  {
    label: "People",
    href: "people",
  },

  {
    label: "About Us",
    href: "about",
  },
];

export function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="white"
      zIndex="popover"
      sx={{
        position: "sticky",
        top: "0",
      }}
    >
      <Flex minH={"80px"} boxShadow="lg" align={"center"}>
        <Container maxW="container.xl" display={"flex"}>
          <Flex
            alignItems="center"
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
          >
            <Link to="/">
              <Flex alignItems="center">
                <Image
                  h="50px"
                  src="https://i.postimg.cc/rm8LXXgw/Asset-1.png"
                />
                <Text fontWeight="bold" fontSize="2xl" pl={4} mt="-10px">
                  movieFreak
                </Text>
              </Flex>
            </Link>
            <Flex
              alignItems="center"
              display={{ base: "none", md: "flex" }}
              ml={10}
            >
              <Navigation />
              <Box
                position="relative"
                pl={20}
                display={{ sm: "none", md: "none", lg: "none", xl: "flex" }}
              >
                <Search />
              </Box>
            </Flex>
            <Flex
              pl={6}
              alignItems="center"
              flex={{ base: 1 }}
              justify={"right"}
            >
              <Button
                display={{ sm: "none", md: "none", lg: "none", xl: "flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"yellow.400"}
                href={"#"}
                _hover={{
                  bg: "yellow.300",
                }}
              >
                Sign Up
              </Button>
            </Flex>
          </Flex>

          <IconButton
            onClick={onToggle}
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ sm: "flex", md: "flex", lg: "flex", xl: "none" }}
          />
          {isOpen ? <MobileNav /> : null}
        </Container>
      </Flex>
    </Box>
  );
}

function Navigation() {
  return (
    <>
      <Box
        align={"center"}
        display={{ sm: "none", md: "none", lg: "none", xl: "flex" }}
      >
        {navItems?.map((navItem) => (
          <Menu key={navItem.label} isLazy>
            <Link to={`/${navItem.href}`}>
              <Button
                _focus={{ bg: "white" }}
                spacing="6"
                variant="ghost"
                key={navItem.label}
                fontWeight={600}
              >
                {navItem.label}
              </Button>
            </Link>
          </Menu>
        ))}
      </Box>
    </>
  );
}

function MobileNav() {
  return (
    <>
      <Stack
        display={{ xl: "none" }}
        bg="white"
        p={4}
        top="79"
        right="0"
        position="absolute"
        w="100%"
      >
        <Search />
        {navItems?.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </>
  );
}

function MobileNavItem({ label, href }) {
  return (
    <Stack p={2} spacing={4}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link to={`/${href}`}>
          <Text fontWeight={600} color="black">
            {label}
          </Text>
        </Link>
      </Flex>
    </Stack>
  );
}
