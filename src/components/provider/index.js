import { ThemeProvider } from "@emotion/react";
import React from "react";
import { CUSTOM_THEME } from "../../utils/theme";
import { createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }) => {
  const theme = createTheme(CUSTOM_THEME);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default Provider;
