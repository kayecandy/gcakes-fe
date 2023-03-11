import { FC } from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';



import { useCakes } from './hooks/useCakes';
import { ProductCard } from '@/components/common/product/ProductCard';



/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  return (
    <Container maxWidth="lg">

      {/* Add cakes component here */}

      {cakes.loading ? (
        <>Add cakes loading view here</>
      ) : cakes.value ? (
        <Grid container spacing={2} columns={{ md: 12 }} sx={{
          bgcolor: '#f9e4e4',
        }}>
            {cakes.value.map((item) => (
              <Grid key={item.sys.id} xs={4} item>

                <ProductCard product={item}></ProductCard>
              </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container>
          <Typography variant="subtitle1">error</Typography>
        </Grid>
      )}

    </Container>
  );
};
