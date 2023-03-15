import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ItemCard, ItemCardSkeleton } from "./CakesComponent";

import { useCakes } from './hooks/useCakes';

import style from './CakesSection.module.css';
import { grey } from '@mui/material/colors';
import { ProductCardError, ProductCardSkeleton } from '@/components/common/ProductCard';


/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();

  return (
    <Container maxWidth="lg">
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
            <ItemCard key={item.sys.id} itemName={item.name} imageUrl={item.image?.url} />
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

      {/*<Grid container spacing={2} columns={{ md: 12 }} sx={{
        bgcolor: '#f9e4e4',
      }}>
        {testCakeData.map((item) => (
          <CakesComponent cakeName={item.cakeName} imageName={item.imageName} />
        ))}
      </Grid>


      <Grid container spacing={2} columns={{ md: 12 }}>
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
      </Grid>*/}

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
