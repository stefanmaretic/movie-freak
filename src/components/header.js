import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
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

const navItems = [
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

function MobileNavItem({ label, children }) {
  console.log(children);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack p={2} spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="black">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor="gray"
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
