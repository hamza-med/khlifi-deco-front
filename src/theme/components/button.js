import { darken, whiten } from "@chakra-ui/theme-tools";

const Button = {
  variants: {
    primary: {
      bg: "#ba0a0a",
      borderRadius: "3px",
      size: "sm",
      fontSize: "15px",
      color: "white",
      _hover: {
        bg: darken("#ba0a0a", 3),
        boxShadow: "md",
      },
    },
    secondary: {
      bg: "#5e705f",
      borderRadius: "3px",
      size: "sm",
      fontSize: "15px",
      color: "white",
      _hover: {
        bg: darken("#5e705f", 3),
        boxShadow: "md",
      },
    },
    cancel: {
      bg: "#f71b1b",
      borderRadius: "3px",
      size: "sm",
      fontSize: "15px",
      color: "white",
      _hover: {
        bg: darken("#f53838", 3),
        boxShadow: "md",
      },
    },
    detail: {
      px: 3,
      fontSize: "md",
      rounded: "full",
      bg: "brandGrey.400",
      color: "white",
      _hover: {
        bg: whiten("brandGrey.400", 4),
        transition: "0.6s all ease",
      },
      _focus: {
        bg: "brandGrey.900",
      },
      _active: {
        bg: darken("brandGrey.700", 7),
      },
    },
  },
};
export default Button;
