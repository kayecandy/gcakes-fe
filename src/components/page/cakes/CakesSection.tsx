import { FC } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CakesComponent from "./CakesComponent";

import { useCakes } from './hooks/useCakes';

import style from './CakesSection.module.css';
import { grey } from '@mui/material/colors';


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
        <Grid container spacing={2} columns={{ md: 12 }} sx={{
          bgcolor: '#f9e4e4',
        }}>
          {cakes.value.map((item) => (
            <CakesComponent key={item.sys.id} cakeName={item.name} imageUrl={item.image?.url} />
          ))}
        </Grid>
      ) : (
        <Grid container>
          <Typography variant="subtitle1">error</Typography>
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
