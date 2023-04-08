/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Link from "next/link";

import { SX_MASKS } from "../util/masks";
import { Box, Container, Typography } from "@mui/material";
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
        sx={{
          maxWidth: "lg",
          pt: 3,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >

          <Box sx={{
            mr: 9
          }}>

          <Link href="/">
            <Typography sx={{
              fontFamily: "Silverstar",
              fontSize: "8rem",
              textDecoration: "none",
              lineHeight: "120%",
                mb: 2,
              color: COLOR_PALLETE[2]
            }}
            >
              Gcakes
            </Typography>
            {/* <img src="/logo.png" alt="GCakes"></img> */}
          </Link>
          </Box>

          <Menu></Menu>
        </Toolbar>
      </Container>
    </Box>
  );
}
