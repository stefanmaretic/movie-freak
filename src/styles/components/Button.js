export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    submitButton: {
      bg: "gray.200",
      _hover: {
        color: "yellow.500",
        textDecoration: "none",
        transform: "scale(1.03)",
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
