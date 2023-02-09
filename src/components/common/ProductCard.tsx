import { FC } from "react";
//@ts-ignore
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../page/ThemeProvider";

/**
 * Add enum for types
 */

type ProductCardProps = {
  imageSrc: string;
  text?: string;
  price?: number;
  // type: enum for prodct type
};

/**
 * TODO: Add ProductCard props
 */
const ProductCard: FC<ProductCardProps> = ({ imageSrc, text, price }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
      elevation={0}
    >
      <CardMedia component="img" image={imageSrc}></CardMedia>
      <CardContent >
        <Typography variant="body1">Some cake name</Typography>
        <Typography variant="body1" fontWeight={700} color={COLOR_PALLETE[1]}>
          100 Php
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
