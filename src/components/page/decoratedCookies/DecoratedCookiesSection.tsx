import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';

import Grid from '@mui/material/Grid';

import { useDecoratedCookies } from './hooks/useDecoratedCookies';


import { ItemCard, ItemCardSkeleton } from "@/components/common/ProductComponent";
import { ProductCardError, ProductCardSkeleton } from '@/components/common/product/ProductCard';


export const DecoratedCookiesSection: FC = () => {
  const decoratedCookies = useDecoratedCookies();

  return (
    <Container sx={{
      maxWidth: "lg"
    }}>
      {decoratedCookies.loading ? (
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
      ) : decoratedCookies.value ? (
        <Grid container spacing={2} columns={{ md: 12 }} sx={{
          bgcolor: '#f9e4e4'
        }}>
          {decoratedCookies.value.map((item) => (
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
