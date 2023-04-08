import { FC, useCallback, useEffect, useState } from "react";

import {
  ProductCard,
  ProductCardError,
  ProductCardSkeleton,
} from "@/components/common/product/ProductCard";
import { Product, ProductTypes } from "@/types/product";
import {
  Box,
  Button,
  Container,
  darken,
  emphasize,
  Grid,
  lighten,
  Typography,
} from "@mui/material";

import { COLOR_PALLETE } from "../../common/ThemeProvider";
import { useFeaturedProducts } from "./hooks/useFeaturedProducts";
import IconCard from "./IconCard";
import Image from "next/image";
import { useProduct } from "@/components/common/hooks/useProduct";
import Link from "next/link";

const FeaturedSection: FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product>();

  const featuredProducts = useProduct("cakes");

  useEffect(() => {
    if (featuredProducts.value?.length && !activeProduct) {
      setActiveProduct(featuredProducts.value[0]);
    }
  }, [featuredProducts, activeProduct]);

  if (!featuredProducts.value?.length || !activeProduct) {
    return <></>;
  }

  return (
    <Box
      sx={{
        // backgroundColor: lighten(COLOR_PALLETE[3], 0.8),
        // backgroundImage: `url("/gray-concrete-wall.jpeg")`,
        backgroundSize: "cover",
        // backgroundBlendMode: "darken"
        backgroundColor: "white",
      }}
    >
      <Grid
        container
        sx={{
          // alignItems: "center",
          flexWrap: "nowrap",
          margin: "0 auto",
        }}
        maxWidth="xl"
      >
        <Grid
          item
          xs={5}
          sx={{
            // backgroundImage: `url(${activeProduct?.image?.url ?? ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "3rem",
            my: 15,
            backgroundColor: lighten(COLOR_PALLETE[3], 0.8),

            backgroundImage: `url("/gray-concrete-wall.jpeg")`,
            overflow: "hidden"
          }}
        >
          <Link href={`/product/view/${activeProduct.sys.id}`}>
          
          <Box
            sx={{
              height: "100%",
              widt: "100%",
              backgroundImage: `url(${activeProduct.image?.url ?? ""})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                p: 2,
                background: COLOR_PALLETE[1],
                position: "absolute",
                top: "5%",
                textTransform: "uppercase",
                color: "white"
              }}
              variant="h5"
            >
              {activeProduct.name}
              </Typography>
              
              <Button variant="text" sx={{
                position: "absolute",
                bottom: "3%",
                right: "3%",
                color: emphasize(COLOR_PALLETE[0], 0.4)
              }}>View Product</Button>
          </Box>
          </Link>
        </Grid>
        <Grid item xs={7} sx={{ px: 7, my: 15 }}>
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
            Catalogue
          </Typography>

          <Box
            sx={{
              mt: 2,
              mb: 5,
              ".MuiButton-root": {
                fontSize: "2rem",
                color: emphasize(COLOR_PALLETE[3], 0.4),
              },
            }}
            textAlign="center"
          >
            <Button
              sx={{
                mx: 1,
              }}
              variant="text"
              disableElevation
              size="large"
            >
              Cakes
            </Button>
          </Box>

          <Grid container>
            {featuredProducts.value.map((product) => (
              <Grid
                item
                key={product.sys.id}
                xs={6}
                sx={{
                  color: emphasize(
                    COLOR_PALLETE[3],
                    product.sys.id === activeProduct?.sys.id ? 0.3 : 0.6
                  ),
                  px: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: emphasize(COLOR_PALLETE[3], 0.4),
                  },
                }}
                onClick={() => {
                  setActiveProduct(product);
                }}
              >
                <Grid container>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      sx={{
                        letterSpacing: "2px",
                        fontWeight: "700 !important",
                        textTransform: "uppercase",
                        fontSize: 18,
                      }}
                    >
                      {product.name.toLowerCase()}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      flexGrow: 1,
                      borderBottom: "2px dotted",
                    }}
                  ></Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      sx={{
                        letterSpacing: "2px",
                        fontWeight: "700 !important",
                        textTransform: "uppercase",
                        fontSize: 18,
                      }}
                    >
                      &#8369;{product.price}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: 14,
                    mb: 3,
                    fontStyle: "italic",
                  }}
                >
                  {product.description.toLowerCase()}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
