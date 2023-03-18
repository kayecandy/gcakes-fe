import * as React from "react";

import { SX_MASKS } from "@/components/common/masks";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { COLOR_PALLETE } from "../ThemeProvider";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { ContactMailOutlined, RecentActors } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        GCakes by Gina
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
        px: 2,
        backgroundColor: COLOR_PALLETE[4],
        flexShrink: 0,
      }}
    >
      <Container
        sx={{
          textAlign: "center",
        pb: 20,

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
        <Grid
          container
          sx={{
            mt: 8,
            display: "flex",
          }}
          columnGap={2}
          wrap="nowrap" 
          alignItems="stretch"
        >
          <Grid item sm={12}>
            <TextField
              InputProps={{
                startAdornment: <InputAdornment position="start" sx={{
                  mr: 1
                }}>
                  <RecentActors sx={{
                    color: COLOR_PALLETE[3]
                  }} fontSize="large"></RecentActors>
                </InputAdornment>
              }}
              fullWidth
              variant="standard"
              placeholder="Enter your email or contact number here"
              sx={{
                ".MuiInputBase-root::after": {
                  borderColor: COLOR_PALLETE[3]
                }
              }}
            ></TextField>
          </Grid>
          <Grid item sm="auto">
            <Button sx={{
              height: "100%",
              px: 3,
              color: COLOR_PALLETE[3]
            }}>Send</Button>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          borderTop: "1px solid grey"
        }}
      >
      <Container sx={{py: 3}} maxWidth="lg" >
        <Grid container justifyContent="space-between">
          <Grid item>
            Social media links
            </Grid>
            <Grid item justifySelf="center">
        <Copyright />
              
            </Grid>
            <Grid item>
              Other links
            </Grid>
        </Grid>
      </Container>

      </Box>
    </Box>
  );
}
