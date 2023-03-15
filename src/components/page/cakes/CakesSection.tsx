import { FC } from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ItemCard, ItemCardSkeleton } from "./CakesComponent";

import { useCakes } from './hooks/useCakes';
import { ProductCard } from '@/components/common/product/ProductCard';


import style from './CakesSection.module.css';
import { grey } from '@mui/material/colors';
import { ProductCardError, ProductCardSkeleton } from '@/components/common/ProductCard';


/**
 * Use FeaturedSection as basis
 */
export const CakesSection: FC = () => {
  const cakes = useCakes();



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

    



    </Container>
  );
};
