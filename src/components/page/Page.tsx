import * as React from "react";

import { AppProps } from "next/app";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Page({ Component, pageProps }: AppProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header
        sections={[
          {
            title: "test title",
            url: "testurl",
          },
        ]}
        title="Test Titleeee"
      ></Header>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Component {...pageProps} />
      </Box>

      <Footer></Footer>
    </Box>
  );
}
