import * as React from "react";

import { SX_MASKS } from "@/components/common/util/masks";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { COLOR_PALLETE } from "../ThemeProvider";
import { Button, Grid, TextField } from "@mui/material";

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
        ...SX_MASKS[1]("top"),
        pt: 15,
        pb: 20,
        px: 2,
        backgroundColor: COLOR_PALLETE[4],
        flexShrink: 0,
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          maxWidth: "sm"
        }}
        maxWidth="sm"
      >
        <Typography
          sx={{
            fontFamily: "Silverstar",
            fontSize: "8rem",
            lineHeight: "100%",
            marginBottom: "-2.5rem",
            color: COLOR_PALLETE[3],
            position: "relative",
            zIndex: 1,
          }}
        >
          gcakes
        </Typography>
        <Typography
          sx={{
            mb: 3,
          }}
          variant="h2"
        >
          By Gina
        </Typography>
        <Typography variant="body1">Need more?</Typography>
        <Typography variant="body1">
          Leave us your email or contact details and we&apos;ll get in touch!
        </Typography>
        {/* <Copyright /> */}
        <Grid
          container
          sx={{
            mt: 8,
            display: "flex",
          }}
          columnGap={2}
        >
          <Grid item sx={{
            flexGrow: 1,
          }} alignItems="stretch">
            <TextField
              fullWidth              
              variant="filled"
              placeholder="Enter your email or contact number here"
              InputProps={{
                disableUnderline: true,
                sx: {
                  ".MuiInputBase-input": {
                    py: 2,
                    px: 3
                  }
                }
              }}
            ></TextField>
          </Grid>
          <Grid item sm="auto">
            <Button sx={{
              height: "100%",
              px: 3
            }}>Send</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
