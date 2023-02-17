import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';

import { useCakes } from './hooks/useCakes';

import './CakesSection.module.css';

/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">This is cakes section</Typography>

      {/* Add cakes component here */}

      {/* {cakes.loading ? (
        <>Add cakes loading view here</>
      ) : cakes.value ? (
        <>Add cakes component here</>
      ) : (
        <>Add cakes error component here</>
      )} */}

      <div className="container">
        <div className="item">
          <img className="itemImg" src="Cake3.png" alt="item 1" />
          <button>Button 1</button>
        </div>
        <div className="item">
          <img className="itemImg" src="Cake3.png" alt="item 2" />
          <button>Button 2</button>
        </div>
        <div className="item">
          <img className="itemImg" src="Cake3.png" alt="item 3" />
          <button>Button 3</button>
        </div>
      </div>

    </Container>
  );
};
