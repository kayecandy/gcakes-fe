/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Link from "next/link";

import { SX_MASKS } from "@/components/common/util/masks";
import { Box, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import { COLOR_PALLETE } from "../ThemeProvider";
import Menu from "./Menu";



export default function Header() {

  return (
    <Box
      sx={{
        background: COLOR_PALLETE[1],
        // background: "white",
        position: "relative",
        zIndex: 1200,
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
