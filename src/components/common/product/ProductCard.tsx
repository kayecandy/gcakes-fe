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

import { COLOR_PALLETE } from '../../page/ThemeProvider';
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
        // maxWidth: 400,
        textAlign: "center",
        mx: 2,
        p: 4,
        borderRadius: 5
      }}
      elevation={0}
    >
      {/* {imageSrc ? (
        <CardMedia height={250} component="img" image={imageSrc}></CardMedia>
      ) : (
        <CakeOutlined
          sx={{
            fontSize: 250,
            color: COLOR_PALLETE[4],
          }}
        ></CakeOutlined>
      )} */}
      <CardContent>

        <Typography variant="h5" sx={{
        fontFamily: "sans-serif"
      }}>{product.name}</Typography>


        <Box sx={{
          height: "400px"
        }}>
          <img style={{
            maxWidth: "100%"
          }} src={product.image?.url ?? ""}></img>
        </Box>

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
