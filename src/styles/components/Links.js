export const LinkStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    footerLink: {
      fontSize: "14px",
      fontWeight: "500",
      _hover: {
        color: "yellow.500",
        textDecoration: "none",
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
