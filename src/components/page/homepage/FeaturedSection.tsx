import { FC, useCallback, useEffect, useState } from "react";

import { SX_MASKS } from "@/components/common/masks";
import {
  ProductCard,
  ProductCardError,
  ProductCardSkeleton,
} from "@/components/common/ProductCard";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../ThemeProvider";
import { useFeaturedProducts } from "./hooks/useFeaturedProducts";
import IconCard from "./IconCard";

const FeaturedSection: FC = () => {
  const featuredProducts = useFeaturedProducts();

  const [activeProductType, setActiveProductType] = useState("cakes");

  useEffect(() => {
    (
      window as typeof window & {
        setActiveProductType: typeof setActiveProductType;
      }
    ).setActiveProductType = setActiveProductType;
  }, [setActiveProductType]);

  const getSelectedProductType = useCallback(
    (key: string) => {
      if (activeProductType === key) {
        return "contained";
      }
      return "outlined";
    },
    [activeProductType]
  );

  useEffect(() => {
    console.log("Featured products changed", featuredProducts);
  }, [featuredProducts]);

  useEffect(() => {
    console.log("here is active product type", activeProductType);
  }, [activeProductType]);

  return (
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
              <IconCard
                text={"Some shipping text here"}
                type={"LocalShippingOutlined"}
              ></IconCard>
            </Grid>

            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"AddCircleOutline"}
              ></IconCard>
            </Grid>

            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"PaymentOutlined"}
              ></IconCard>
            </Grid>

            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"CakeOutlined"}
              ></IconCard>
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
            {/* TODO: Add onClick event to set activeProductTypeState*/}
            <Button
              sx={{
                mx: 1,
                // backgroundColor: COLOR_PALLETE[3],
              }}
              variant={getSelectedProductType("cakes")}
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
              variant={getSelectedProductType("cupcakes")}
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
              variant={getSelectedProductType("decorated_cookies")}
              disableElevation
              size="large"
            >
              Decorated Cookies
            </Button>
          </Box>

          <Button
            onClick={() => {
              setActiveProductType(`sample product type ${Math.random()}`);
            }}
          >
            Sample button
          </Button>

          {/* Shorthand if statement */}
          {true ? <>value if true</> : <>value if false</>}

          {/* This is how it looks like when loading */}
          {featuredProducts.loading ? (
            <Grid container>
              <Grid item xs={4}>
                <ProductCardSkeleton></ProductCardSkeleton>
              </Grid>
              <Grid item xs={4}>
                <ProductCardSkeleton></ProductCardSkeleton>
              </Grid>
              <Grid item xs={4}>
                <ProductCardSkeleton></ProductCardSkeleton>
              </Grid>
            </Grid>
          ) : // How it looks like when there's a value
          featuredProducts.value ? (
            <Grid container>
              {featuredProducts.value.map((product) => (
                <Grid key={product.sys.id} item xs={4}>
                  <ProductCard
                    imageSrc={product.image?.url}
                    price={product.price}
                    text={product.name}
                  ></ProductCard>
                </Grid>
              ))}
            </Grid>
          ) : (
            // This is what it looks like when it errored
            <Grid container>
              <Grid item xs={4}>
                <ProductCardError></ProductCardError>
              </Grid>
              <Grid item xs={4}>
                <ProductCardError></ProductCardError>
              </Grid>
              <Grid item xs={4}>
                <ProductCardError></ProductCardError>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSection;
