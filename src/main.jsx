import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";
import theme from "./theme/index.js";
import { Global } from "@emotion/react";
import GlobalStyles from "./theme/globalStyles.js";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <ShoppingCartProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ShoppingCartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
