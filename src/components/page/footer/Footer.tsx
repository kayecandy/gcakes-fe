import * as React from "react";

import { SX_MASKS } from "@/components/common/masks";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { COLOR_PALLETE } from "../ThemeProvider";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pt: "4vw",
        pb: 3,
        px: 2,
        backgroundColor: COLOR_PALLETE[4],
        flexShrink: 0,
        ...SX_MASKS[1]("top"),
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
