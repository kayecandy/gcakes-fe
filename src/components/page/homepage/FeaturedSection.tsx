import { FC, useCallback, useEffect, useState } from "react";

import {
  ProductCard,
  ProductCardError,
  ProductCardSkeleton,
} from "@/components/common/product/ProductCard";
import { ProductTypes } from "@/types/product";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../../common/ThemeProvider";
import { useFeaturedProducts } from "./hooks/useFeaturedProducts";
import IconCard from "./IconCard";

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
        backgroundColor: "white",
      }}
    >
      <Container
        sx={{
          // pt: 13,
          pb: 13,
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            mb: 13,
          }}
          textAlign="center"
        >
        </Box>
        <Box>
          <Typography
            // variant="h3"
            align="center"
            color={COLOR_PALLETE[2]}
            fontFamily="Silverstar"
            fontSize="6rem"
            sx={{
              marginBottom: "-3rem"
            }}
          >
            Featured cakes
          </Typography>

          <Box
            sx={{
              mt: 2,
              mb: 10,
            }}
            textAlign="center"
          >
            <Button
              sx={{
                mx: 1,
                // backgroundColor: COLOR_PALLETE[3],
              }}
              variant={getSelectedProductType("cakes")}
              disableElevation
              size="large"
              onClick={() => {
                setActiveProductType("cakes");
              }}
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
              onClick={() => {
                setActiveProductType("cupcakes");
              }}
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
