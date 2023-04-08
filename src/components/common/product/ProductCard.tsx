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
  emphasize,
  lighten,
} from '@mui/material';

import { COLOR_PALLETE, cursiveFont } from '../ThemeProvider';
import { Product } from '@/types/product';
import Image from 'next/image';


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
        // p: 2,
        fontFamily: "Oswald, sans-serif",
        backgroundColor: "transparent",
          // backgroundColor: lighten(COLOR_PALLETE[3], 0.6),
          // backgroundColor: "white",
        borderRadius: "4rem",
        // mx: 3,
          pb: 2


      }}
      elevation={0}
    >
      <CardContent>
        {/* <Image src={product.image?.url ?? ""} alt={product.name} width={400} height={400}></Image> */}
        <Box sx={{
          height: "450px",
          backgroundImage: `url(${product.image?.url ?? ""})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundColor: lighten(COLOR_PALLETE[3], 0.4),
          mb: 3,
          borderRadius: "4rem"
        }}>
          {/* <img style={{
            maxWidth: "100%"
          }} src={product.image?.url ?? ""} alt={product.name}></img> */}
        </Box>

        <Typography
          variant="h5"
          sx={{
            letterSpacing: "2px",
            fontWeight: "700 !important",
            textTransform: "uppercase",
            fontSize: 20,
            color: emphasize(COLOR_PALLETE[3], 0.6),
            // mb: 1
            // fontFamily: cursiveFont.fontFamily
          }}
        >
          {product.name.toLowerCase()}
        </Typography>

        <Typography sx={{
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 14,
          mb: 2,
          // fontStyle: 'italic',
          color: emphasize(COLOR_PALLETE[3], 0.6)

        }}>
          {product.description.toLowerCase()}
        </Typography>

        <Typography sx={{
          letterSpacing: "1px",
          fontSize: 30,
          color: emphasize(COLOR_PALLETE[3], 0.1)
        }} variant="h5" fontWeight={700}>
          &#8369;{product.price}
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
