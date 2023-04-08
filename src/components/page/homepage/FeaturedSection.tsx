/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useState } from "react";

import {
  ProductCard,
  ProductCardError,
  ProductCardSkeleton,
} from "@/components/common/product/ProductCard";
import { ProductTypes } from "@/types/product";
import { Box, Button, Container, emphasize, Grid, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../../common/ThemeProvider";
import { useFeaturedProducts } from "./hooks/useFeaturedProducts";

const FeaturedSection: FC = () => {
  const [activeProductType, setActiveProductType] =
    useState<ProductTypes>("cakes");

  const featuredProducts = useFeaturedProducts(activeProductType);

  useEffect(() => {
    (
      window as typeof window & {
        setActiveProductType: typeof setActiveProductType;
      }
    ).setActiveProductType = setActiveProductType;
  }, [setActiveProductType]);

  const getSelectedProductType = useCallback(
    (key: ProductTypes) => {
      // if (activeProductType === key) {
      //   return "contained";
      // }
      // return "outlined";

      return "text"
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
        // backgroundColor: lighten(COLOR_PALLETE[3], 0.8),
        // backgroundImage: `url("/gray-concrete-wall.jpeg")`,
        backgroundSize: "cover",
        // backgroundBlendMode: "darken"
        backgroundColor: "whitesmoke"
      }}
    >
      <Container
        sx={{
          pt: 15,
          mb: 20,
          maxWidth:"xl"
        }}
      >
        <Box>
          <Typography
            // variant="h3"
            align="center"
            color={COLOR_PALLETE[3]}
            fontFamily="Silverstar"
            fontSize="6rem"
            sx={{
              marginBottom: "-5rem",
              // lineHeight: "110%"
              // position: "relative",
              // zIndex: 1
            }}
          >
            Featured cakes
          </Typography>

          <Box
            sx={{
              mt: 2,
              mb: 5,
              ".MuiButton-root": {
                fontSize: "2rem",
                color: emphasize(COLOR_PALLETE[3], 0.4)
              }
            }}
            textAlign="center"
          >
            <Button
              sx={{
                mx: 1,
              }}
              variant={getSelectedProductType("cakes")}
              disableElevation
              size="large"
              onClick={() => {
                setActiveProductType("cakes");
              }}
            >
              Cakes
            </Button>

            <Button
              sx={{
                mx: 1,
              }}
              variant={getSelectedProductType("cupcakes")}
              disableElevation
              size="large"
              onClick={() => {
                setActiveProductType("cupcakes");
              }}
            >
              Cupcakes
            </Button>
            <Button
              sx={{
                mx: 1,
              }}
              variant={getSelectedProductType("decorated_cookies")}
              disableElevation
              size="large"
              onClick={() => {
                setActiveProductType("decorated_cookies");
              }}
            >
              Decorated Cookies
            </Button>
          </Box>

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
                {featuredProducts.value.slice(0, 3).map((product) => (
                  <Grid key={product.sys.id} item xs={4}>
                    <ProductCard
                      product={product}
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
