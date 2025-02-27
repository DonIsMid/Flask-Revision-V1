import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

// extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#ff0044",
    800: "#92dbca",
    700: "#040e1b",
    600: "#55a19b",
    500: "#50535f",
    400: "#c8e9e5",
  },
};
const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
