/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Link from "next/link";

import { SX_MASKS } from "@/components/common/masks";
import { Box, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import { COLOR_PALLETE } from "../ThemeProvider";
import Menu from "./Menu";

type HeaderSections = {
  title: string;
  url: string;
};

type HeaderProps = {
  sections: ReadonlyArray<HeaderSections>;
  title: string;
};

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <Box
      sx={{
        background: COLOR_PALLETE[1],
        // background: "white",
        position: "relative",
        zIndex: 500,
        ...SX_MASKS[0]("bottom"),
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 3,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <img src="/logo.png" alt="GCakes"></img>
          </Link>

          <Menu></Menu>
        </Toolbar>
      </Container>
    </Box>
  );
}
