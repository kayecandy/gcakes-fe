import { SX_MASKS } from "@/components/common/masks";
import ProductCard from "@/components/common/ProductCard";
import HeaderSection from "@/components/page/homepage/HeaderSection";
import { IconCard1, IconCard2, IconCard3, IconCard4 } from "@/components/page/homepage/IconCards";
import { COLOR_PALLETE } from "@/components/page/ThemeProvider";
import {
  AddCircleOutline,
  CakeOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
} from "@mui/icons-material";
//@ts-ignore
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function IndexPage() {
  return (
    <>
      {/* TODO: Need to separate into different section components */}
      <HeaderSection></HeaderSection>

      {/* TODO: Need to separate into different section components */}
      <Box
        sx={{
          ...SX_MASKS[1],
          backgroundColor: "white",
        }}
      >
        <Container
          sx={{
            pt: 13,
            pb: 5,
          }}
          maxWidth="lg"
        >
          <Box
            sx={{
              mb: 8,
            }}
            textAlign="center"
          >
            <Grid container>
              <Grid item xs={4}>
                <IconCard1></IconCard1>
              </Grid>

              <Grid item xs={4}>
                <IconCard2></IconCard2>
              </Grid>

              <Grid item xs={4}>
                <IconCard3></IconCard3>
              </Grid>

              <Grid item xs={4}>
                <IconCard4></IconCard4>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography
              variant="h3"
              align="center"
              fontWeight={700}
              color={COLOR_PALLETE[1]}
            >
              Featured cakes
            </Typography>

            <Box
              sx={{
                mt: 2,
                mb: 4,
              }}
              textAlign="center"
            >
              {/* TODO: Add enum for types */}
              <Button
                sx={{
                  mx: 1,
                  backgroundColor: COLOR_PALLETE[3],
                }}
                variant="contained"
                disableElevation
                size="large"
              // color={}
              >
                Cakes
              </Button>

              <Button
                sx={{
                  mx: 1,
                  // backgroundColor: COLOR_PALLETE[3],
                }}
                variant="outlined"
                disableElevation
                size="large"
              >
                Cupcakes
              </Button>
              <Button
                sx={{
                  mx: 1,
                  // backgroundColor: COLOR_PALLETE[3],
                }}
                variant="outlined"
                disableElevation
                size="large"
              >
                Decorated Cookies
              </Button>
            </Box>

            <Grid container>
              <Grid item xs={3}>
                <ProductCard imageSrc="/cake.PNG" price={299}></ProductCard>
              </Grid>
              <Grid item xs={3}>
                <ProductCard imageSrc="/cake2.jpeg" price={199}></ProductCard>
              </Grid>
              <Grid item xs={3}>
                <ProductCard imageSrc="/Cake3.png" price={599}></ProductCard>
              </Grid>
              <Grid item xs={3}>
                <ProductCard imageSrc="/cake4.avif" price={399}></ProductCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box >
    </>
  );
}
