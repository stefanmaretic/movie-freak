import { extendTheme } from "@chakra-ui/react";
import { LinkStyles as Link } from "./components/Links";
import { ButtonStyles as Button } from "./components/Button";

export const theme = extendTheme({
  components: {
    Link,
    Button,
  },
});
