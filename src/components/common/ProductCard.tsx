import { FC } from 'react';

import {
  CakeOutlined,
  CloseSharp,
} from '@mui/icons-material';
//@ts-ignore
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';

import { COLOR_PALLETE } from '../page/ThemeProvider';

/**
 * Add enum for types
 */

type ProductCardProps = {
  imageSrc?: string;
  text: string;
  price: number;
  // type enum for ProductTypes
};

/**
 * TODO: Add ProductCard props
 */
export const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  text,
  price,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        textAlign: "center",
      }}
      elevation={0}
    >
      {imageSrc ? (
        <CardMedia height={250} component="img" image={imageSrc}></CardMedia>
      ) : (
        <CakeOutlined
          sx={{
            fontSize: 250,
            color: COLOR_PALLETE[4],
          }}
        ></CakeOutlined>
      )}
      <CardContent>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="body1" fontWeight={700} color={COLOR_PALLETE[1]}>
          Php {price}
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
