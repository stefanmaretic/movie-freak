import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import {
  Text,
  Box,
  Image,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { Search } from "./search";

export function Header() {
  return (
    <Box
      zIndex="popover"
      sx={{
        position: "-webkit-sticky",
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
            <Flex alignItems="center">
              <Image h="50px" src="https://i.postimg.cc/rm8LXXgw/Asset-1.png" />
              <Text fontWeight="bold" fontSize="2xl" pl={4} mt="-10px">
                movieFreak
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              display={{ base: "none", md: "flex" }}
              ml={10}
            >
              <Navigation />
              <Search />
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
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={{ sm: "flex", md: "flex", lg: "flex", xl: "none" }}
          />
          {/* <MobileNav /> */}
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
          <Menu isLazy>
            <MenuButton pl={6} key={navItem.label} fontWeight={600}>
              {navItem.label}
            </MenuButton>
            <MenuList
              border="none"
              bg="white"
              boxShadow="lg"
              zIndex="popover"
              p={2}
            >
              {navItem.children.map((child) => (
                <MenuItem
                  key={child.label}
                  fontWeight={600}
                  p={2}
                  rounded="md"
                  _hover={{ bg: "gray.50", color: "yellow.400" }}
                  _focus={{ bg: "gray.50" }}
                >
                  {child.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </Box>
    </>
  );
}

var navItems = [
  {
    label: "Movies",
    children: [
      {
        label: "Popular",
        href: "#",
      },
      {
        label: "Now Playing",
        href: "#",
      },
      {
        label: "Upcoming",
        href: "#",
      },
      {
        label: "Top Rated",
        href: "#",
      },
    ],
  },
  {
    label: "Tv Shows",
    children: [
      {
        label: "Popular",
        href: "#",
      },
      {
        label: "Airing Today",
        href: "#",
      },
      {
        label: "On Tv",
        href: "#",
      },
      {
        label: "Top Rated",
        href: "#",
      },
    ],
  },
  {
    label: "People",
    children: [
      {
        label: "Popular People",
        href: "#",
      },
    ],
  },

  {
    label: "About Us",
    children: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Contact Us",
        href: "#",
      },
    ],
  },
];
