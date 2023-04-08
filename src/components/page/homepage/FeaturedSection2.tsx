/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from "react";

import { Product } from "@/types/product";
import {
  Box,
  Button,
  Grid,
  Typography,
  emphasize,
  lighten
} from "@mui/material";

import { useProduct } from "@/components/common/hooks/useProduct";
import Image from "next/image";
import Link from "next/link";
import { COLOR_PALLETE } from "../../common/ThemeProvider";

const FeaturedSection: FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product>();
  const timeout = useRef<NodeJS.Timeout>();

  const featuredProducts = useProduct("cakes");

  useEffect(() => {
    if (featuredProducts.value?.length && !activeProduct) {
      setActiveProduct(featuredProducts.value[0]);
    }
  }, [featuredProducts, activeProduct]);

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      if (activeProduct && featuredProducts.value?.length) {
        const i =
          featuredProducts.value?.findIndex(
            (p) => p.sys.id === activeProduct.sys.id
          ) ?? -1;
        const nextIndex = (i + 1) % featuredProducts.value.length;

        if (i > -1) {
          setActiveProduct(featuredProducts.value[nextIndex]!);
        }
      }
    }, 2500);
  }, [activeProduct]);

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
          maxWidth:"xl"
        }}
        columnSpacing={9}
      >
        <Grid
          item
          xs="auto"
          sx={{
            my: 15,
          }}
        >
          <Link data-testid="activeProductLink" href={`/product/view/${activeProduct.sys.id}`}>
            <Box
              sx={{
                backgroundColor: lighten(COLOR_PALLETE[3], 0.8),

                backgroundImage: `url("/gray-concrete-wall.jpeg")`,
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "3rem",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={activeProduct.image?.url ?? ""}
                  alt={activeProduct.name}
                  width={550}
                  height={550}
                ></Image>
                <Typography
                  sx={{
                    p: 2,
                    background: COLOR_PALLETE[1],
                    position: "absolute",
                    top: "5%",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                  variant="h5"
                >
                  {activeProduct.name}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    bottom: "3%",
                    right: "3%",
                    color: emphasize(COLOR_PALLETE[0], 0.4),
                  }}
                >
                  &#8369;{activeProduct.price}
                </Typography>
              </Box>
            </Box>
            <Typography fontStyle={"italic"} textAlign={"center"}>
              Click me!
            </Typography>
          </Link>
        </Grid>
        <Grid item sx={{ px: 7, my: 15, flexGrow: 1 }}>
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
                data-testid={`productItem-${product.sys.id}`}
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
