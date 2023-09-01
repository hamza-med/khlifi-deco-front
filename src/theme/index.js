import { extendTheme, theme as base } from "@chakra-ui/react";
import styles from "./styles";
import Form from "./components/form";
import Alert from "./components/alert";
import Button from "./components/button";
import Drawer from "./components/drawer";

const overrides = {
  colors: {
    brandRed: {
      50: "#f87e7e",
      100: "#f54e4e",
      200: "#f43636",
      300: "#f31e1e",
      400: "#ea0d0d",
      500: "#dd0031",
      600: "#c7002c",
      700: "#b10027",
      800: "#9b0022",
      900: "#85001d",
    },
    brandGrey: {
      50: "#a1a1a1",
      100: "#787878",
      200: "#6b6b6b",
      300: "#5e5e5e",
      400: "#525252",
      500: "#424242",
      600: "#3b3b3b",
      700: "#353535",
      800: "#2e2e2e",
      900: "#282828",
    },
  },
  styles,
  fonts: {
    heading: `Roboto, sans-serif,${base?.fonts.heading}`,
    body: `Open Sans, sans-serif,${base?.fonts.body}`,
  },
  components: {
    Form,
    Alert,
    Button,
    Drawer,
  },
};
export default extendTheme(overrides);
