import { FC } from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../page/ThemeProvider";

const ProductCard: FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
      elevation={0}
    >
      <CardMedia component="img" image="/Cake3.png"></CardMedia>
      <CardContent>
        <Typography variant="body1">Some cake name</Typography>
        <Typography variant="body1" fontWeight={700} color={COLOR_PALLETE[1]}>
          100 Php
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
