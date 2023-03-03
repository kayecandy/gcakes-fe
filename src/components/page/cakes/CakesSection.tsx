import { FC } from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CakesComponent from "./CakesComponent";

import { useCakes } from './hooks/useCakes';
import { ProductCard } from '@/components/common/product/ProductCard';


import style from './CakesSection.module.css';
import { grey } from '@mui/material/colors';


/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  console.log(cakes)

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">This is cakes section</Typography>

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
        <>Add cakes error component here</>
      )}

      {/* <Grid container spacing={2} columns={{ md: 12 }} sx={{
        bgcolor: '#f9e4e4',
      }}>
        {testCakeData.map((item) => (
          <CakesComponent cakeName={item.cakeName} imageName={item.imageName} />
        ))}
      </Grid> */}


      {/* <Grid container spacing={2} columns={{ md: 12 }}>
        <Grid item md={4}>
          <Item>md=4</Item>
        </Grid>
        <Grid item md={4}>
          <Item>md=4</Item>
        </Grid>
        <Grid item md={4}>
          <Item>md=4</Item>
        </Grid>
        <Grid item md={12}>
          <Item>md=12</Item>
        </Grid>
      </Grid> */}

      {/* <div className={style.container}>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 1" />
          <button className={style.btn}>
            Item 1
            <img className={style.btnImg} src="Cake3.png" alt="Item 1 btnImg" />
          </button>
        </div>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 2" />
          <button className={style.btn}>
            Item 2
            <img className={style.btnImg} src="Cake3.png" alt="Item 1 btnImg" />
          </button>
        </div>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 3" />
          <button className={style.btn}>
            Item 3
            <img className={style.btnImg} src="Cake3.png" alt="Item 1 btnImg" />
          </button>
        </div>
      </div>

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
          <button className={style.btn}>
            Item 2
            <img className={style.btnImg} src="Cake3.png" alt="Item 1 btnImg" />
          </button>
        </div>
        <div className={style.item}>
          <img className={style.itemImg} src="Cake3.png" alt="item 3" />
          <button className={style.btn}>
            Item 3
            <img className={style.btnImg} src="Cake3.png" alt="Item 1 btnImg" />
          </button>
        </div>
      </div> */}



    </Container>
  );
};
