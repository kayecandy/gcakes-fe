import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';

import Grid from '@mui/material/Grid';

import { useCupcakes } from './hooks/useCupcakes';

import { ItemCard, ItemCardSkeleton } from "@/components/common/ProductComponent";
import { ProductCardError, ProductCardSkeleton } from '@/components/common/product/ProductCard';


export const CupcakesSection: FC = () => {
  const cupcakes = useCupcakes();

  return (
    <Container sx={{
      maxWidth: "lg"
    }}>
      {cupcakes.loading ? (
        <Grid container>
          <Grid item xs={4}>
            <ProductCardSkeleton></ProductCardSkeleton>
          </Grid>
          <Grid item xs={4}>
            <ProductCardSkeleton></ProductCardSkeleton>
          </Grid>
          <Grid item xs={4}>
            <ProductCardSkeleton></ProductCardSkeleton>
          </Grid>
        </Grid>
      ) : cupcakes.value ? (
        <Grid container spacing={2} columns={{ md: 12 }} sx={{
          bgcolor: '#f9e4e4'
        }}>
          {cupcakes.value.map((item) => (
            <ItemCard key={item.sys.id} product={item} />
          ))}
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={4}>
            <ProductCardError></ProductCardError>
          </Grid>
          <Grid item xs={4}>
            <ProductCardError></ProductCardError>
          </Grid>
          <Grid item xs={4}>
            <ProductCardError></ProductCardError>
          </Grid>
        </Grid>
      )}

    </Container>
  );
};
