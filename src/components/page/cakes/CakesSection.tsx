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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const testCakeData = [
    {
      cakeName: "Test Cake 1",
      imageName: "Test Image 1",
    },
    {
      cakeName: "Test Cake 2",
      imageName: "Test Image 2",
    },
    {
      cakeName: "Test Cake 3",
      imageName: "Test Image 3",
    },
    {
      cakeName: "Test Cake 4",
      imageName: "Test Image 4",
    },
    {
      cakeName: "Test Cake 5",
      imageName: "Test Image 5",
    },
    {
      cakeName: "Test Cake 6",
      imageName: "Test Image 6",
    },
    {
      cakeName: "Test Cake 7",
      imageName: "Test Image 7",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">This is cakes section</Typography>

      {/* Add cakes component here */}

      {/* {cakes.loading ? (
        <>Add cakes loading view here</>
      ) : cakes.value ? (
        <>Add cakes component here</>
      ) : (
        <>Add cakes error component here</>
      )} */}

      <Grid container spacing={2} columns={{ md: 12 }} sx={{
        bgcolor: '#f9e4e4',
      }}>
        {testCakeData.map((item) => (
          <CakesComponent cakeName={item.cakeName} imageName={item.imageName} />
        ))}
      </Grid>


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
