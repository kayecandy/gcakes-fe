import { FC } from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


import { useCakes } from './hooks/useCakes';
import { ProductCard } from '@/components/common/product/ProductCard';

import { ItemCard, ItemCardSkeleton } from "@/components/common/ProductComponent";
import { ProductCardError, ProductCardSkeleton } from '@/components/common/product/ProductCard';


/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  return (
    <Container sx={{
      maxWidth: "lg"
    }}>
      {/* <Typography variant="h1">This is cakes section</Typography> */}

      {/* Add cakes component here */}

      {cakes.loading ? (
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
      ) : cakes.value ? (
        <Grid container spacing={2} columns={{ md: 12 }} sx={{
          bgcolor: '#f9e4e4'
        }}>
          {cakes.value.map((item) => (
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
