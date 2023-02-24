import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';

import style from './CakesSection.module.css';
import { useCakes } from './hooks/useCakes';

/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  console.log(cakes);

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">This is cakes section</Typography>

      {/* Add cakes component here */}

      {/* {cakes.loading ? (
        <>Add cakes loading view here</>



      ) : cakes.value ? (
        <Grid container spacing={2} columns={{ md: 12 }} sx={{
          bgcolor: '#f9e4e4',
        }}>
          {cakes.value.map((item) => (
            <CakesComponent cakeName={item.name} imageUrl={item.image?.url} />
          ))}
        </Grid>
      ) : (
        <>Add cakes error component here</>
      )} */}

      <div className={style.container}>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 1" />
          <button className={style.btn}>
            Item 1
            <img className={style.btnImg} src="Cake3.png" alt="Item 1 btnImg" />
          </button>
        </div>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 2" />
          <button>Button 2</button>
        </div>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 3" />
          <button>Button 3</button>
        </div>
      </div>
    </Container>
  );
};
