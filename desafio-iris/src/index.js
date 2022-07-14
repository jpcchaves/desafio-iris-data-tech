import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// ThemeProvider
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-style";
import { theme } from "./styles/theme";
// Components
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
