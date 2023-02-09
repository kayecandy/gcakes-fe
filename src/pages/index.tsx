import { SX_MASKS } from "@/components/common/masks";
import ProductCard from "@/components/common/ProductCard";
import { COLOR_PALLETE } from "@/components/page/ThemeProvider";
import {
  CakeOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
} from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function IndexPage() {
  return (
    <>
      {/* TODO: Need to separate into different section components */}
      <Box
        sx={{
          ...SX_MASKS[1],
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
            }}
            maxWidth="sm"
          >
            <Typography
              sx={{ mt: 3, fontWeight: "700" }}
              variant="h1"
              color={COLOR_PALLETE[1]}
            >
              Lorem Ipsum
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
              Pellentesque id molestie ante, tincidunt elementum eros. Mauris
              eros libero, dignissim at vehicula ac, aliquam sed mi.
            </Typography>
          </Container>
        </div>
      </Box>

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
                {/* TODO: This needs to be its own component */}
                <LocalShippingOutlined
                  sx={{
                    fontSize: 100,
                  }}
                  color="primary"
                ></LocalShippingOutlined>
                <Typography variant="h5" color="secondary">
                  Shipping
                </Typography>
                <Typography variant="body1">Some shipping text here</Typography>
              </Grid>

              <Grid item xs={4}>
                <PaymentOutlined
                  sx={{
                    fontSize: 100,
                  }}
                  color="primary"
                ></PaymentOutlined>
                <Typography variant="h5" color="secondary">
                  Shipping
                </Typography>
                <Typography variant="body1">Some shipping text here</Typography>
              </Grid>

              <Grid item xs={4}>
                <CakeOutlined
                  sx={{
                    fontSize: 100,
                  }}
                  color="primary"
                ></CakeOutlined>
                <Typography variant="h5" color="secondary">
                  Cake(?)
                </Typography>
                <Typography variant="body1">Some shipping text here</Typography>
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
                <ProductCard></ProductCard>
              </Grid>
              <Grid item xs={3}>
                <ProductCard></ProductCard>
              </Grid>
              <Grid item xs={3}>
                <ProductCard></ProductCard>
              </Grid>
              <Grid item xs={3}>
                <ProductCard></ProductCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
