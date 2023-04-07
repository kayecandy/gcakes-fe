/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

import {
  CloseSharp,
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material';

import { COLOR_PALLETE } from '../ThemeProvider';
import { Product } from '@/types/product';


type ProductCardProps = {
  product: Product;
};


export const ProductCard: FC<ProductCardProps> = ({
  product
}) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        mx: 2,
        p: 4,
        borderRadius: 5,
        borderWidth: "2px",
        borderColor: COLOR_PALLETE[4],
        borderStyle: "solid"
      }}
      elevation={0}
    >
      <CardContent>
        <Box sx={{
          height: "400px"
        }}>
          <img style={{
            maxWidth: "100%"
          }} src={product.image?.url ?? ""} alt={product.name}></img>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "sans-serif",
          }}
        >
          {product.name}
        </Typography>

        <Typography variant="body1" fontWeight={700} color={COLOR_PALLETE[1]}>
          Php {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <Box
      sx={{
        px: 2,
      }}
    >
      <Skeleton height={250}></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
    </Box>
  );
};

export const ProductCardError = () => {
  return (
    <Box
      sx={{
        px: 2,
        textAlign: "center",
      }}
    >
      <CloseSharp
        sx={{
          fontSize: 250,
          color: COLOR_PALLETE[3],
        }}
      ></CloseSharp>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
    </Box>
  );
};
