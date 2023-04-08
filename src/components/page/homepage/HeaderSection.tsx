import { FC } from "react";

import { SX_MASKS } from "@/components/common/util/masks";
import { Box, Container, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../../common/ThemeProvider";

const HeaderSection: FC = ({}) => {
  return (
    <Box
      sx={{
        ...SX_MASKS[1]("bottom"),
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url(cupcake.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        height: "80vh",
        minHeight: "555px",
        zIndex: 1,
      }}
    >
      <div
        style={{
          // flexGrow: 1,
          backgroundColor: `${COLOR_PALLETE[0]}C0`,
          // paddingBottom: "3vw",
          borderRadius: "2rem",
          borderWidth: "5px",
          borderColor: COLOR_PALLETE[4],
          borderStyle: "solid",
        }}
      >
        <Container
          sx={{
            textAlign: "center",
            pb: 10,
            maxWidth: "sm",
          }}
          maxWidth = "sm"
        >
          <Typography sx={{
            fontFamily: "Silverstar, cursive",
            fontSize: "5rem",
            lineHeight: "150%",
            marginBottom: "-5rem",
            position: "relative",
            zIndex: 1
          }}>welcome to</Typography>
          <Typography
            sx={{ mt: 3, fontWeight: "700", fontSize: "3rem" }}
            variant="h1"
            color={COLOR_PALLETE[1]}
          >
            GCakes!
          </Typography>

          <Box sx={{ py: 2 }}></Box>

          <Typography
            variant="body1"
            sx={{
              lineHeight: "150%",
              letterSpacing: "1px",
            }}
          >
            Aenean ultrices dui massa, nec convallis neque elementum ac.
            Pellentesque id molestie ante, tincidunt elementum eros. Mauris eros
            libero, dignissim at vehicula ac, aliquam sed mi.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default HeaderSection;
