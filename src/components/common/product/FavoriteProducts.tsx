import { FC, useEffect, useState } from "react";
import { useSession } from "../hooks/useSession";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";
import { GET_FAVORITE_PRODUCTS_URL } from "../util/urls";
import { Box, Grid, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { ItemCard } from "../ProductComponent";
import { COLOR_PALLETE } from "../ThemeProvider";

type FavoriteProductResponse = {
  product: Product;
};

export const FavoriteProducts: FC = () => {
  const session = useSession();
  const [favoriteProducts, setFavoriteProducts] = useState<
    ApiResponse<FavoriteProductResponse[]>
  >({
    loading: false,
  });

  useEffect(() => {
    if (session) {
      fetch(GET_FAVORITE_PRODUCTS_URL, {
        headers: {
          authorization: `Bearer ${session.accessToken}`,
        },
      }).then(async (res) => {
        const resJson = await res.json();
        console.log(resJson);
        setFavoriteProducts({
          loading: false,
          value: resJson,
        });
      });
    }
  }, [session]);

  if (!session || !favoriteProducts.value || !favoriteProducts.value.length) {
    return <></>;
  }

  console.log("has products", favoriteProducts);

  return (
    <Box sx={{
      mt: 8
    }}>
      <Typography
        variant="h2"
        sx={{
          color: COLOR_PALLETE[1],
          mb: 2
        }}
      >
        Favorites
      </Typography>
      <Grid container>
        {favoriteProducts.value.map((product) => (

            <ItemCard
              key={product.product.sys.id}
              product={product.product}
            ></ItemCard>
        ))}
      </Grid>
    </Box>
  );
};
