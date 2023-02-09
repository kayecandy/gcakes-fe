import { FC } from 'react';

import { CakeOutlined } from '@mui/icons-material';
//@ts-ignore
import {
  Card,
  CardContent,
  CardMedia,
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
const ProductCard: FC<ProductCardProps> = ({ imageSrc, text, price }) => {
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

export default ProductCard;
