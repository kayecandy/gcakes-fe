import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';

import { useCakes } from './hooks/useCakes';

/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">This is cakes section</Typography>

      {/* Add cakes component here */}

      {cakes.loading ? (
        <>Add cakes loading view here</>
      ) : cakes.value ? (
        <>Add cakes component here</>
      ) : (
        <>Add cakes error component here</>
      )}
    </Container>
  );
};
