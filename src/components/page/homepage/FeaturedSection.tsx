import { FC } from 'react';

import { SX_MASKS } from '@/components/common/masks';
import ProductCard from '@/components/common/ProductCard';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { COLOR_PALLETE } from '../ThemeProvider';
import { useFeaturedProducts } from './hooks/useFeaturedProducts';
import IconCard from './IconCard';

const FeaturedSection: FC = () => {
  const featuredProducts = useFeaturedProducts();

  console.log(featuredProducts);

  return (
    <Box
      sx={{
        ...SX_MASKS[1],
        backgroundColor: "white",
      }}
    >
      <Container
        sx={{
          pt: 13,
          pb: 5,
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            mb: 8,
          }}
          textAlign="center"
        >
          <Grid container>
            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"LocalShippingOutlined"}
              ></IconCard>
            </Grid>

            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"AddCircleOutline"}
              ></IconCard>
            </Grid>

            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"PaymentOutlined"}
              ></IconCard>
            </Grid>

            <Grid item xs={4}>
              <IconCard
                text={"Some shipping text here"}
                type={"CakeOutlined"}
              ></IconCard>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            color={COLOR_PALLETE[1]}
          >
            Featured cakes
          </Typography>

          <Box
            sx={{
              mt: 2,
              mb: 4,
            }}
            textAlign="center"
          >
            {/* TODO: Add enum for types */}
            <Button
              sx={{
                mx: 1,
                backgroundColor: COLOR_PALLETE[3],
              }}
              variant="contained"
              disableElevation
              size="large"
              // color={}
            >
              Cakes
            </Button>

            <Button
              sx={{
                mx: 1,
                // backgroundColor: COLOR_PALLETE[3],
              }}
              variant="outlined"
              disableElevation
              size="large"
            >
              Cupcakes
            </Button>
            <Button
              sx={{
                mx: 1,
                // backgroundColor: COLOR_PALLETE[3],
              }}
              variant="outlined"
              disableElevation
              size="large"
            >
              Decorated Cookies
            </Button>
          </Box>

          <Grid container>
            {!featuredProducts ? (
              <CircularProgress></CircularProgress>
            ) : (
              featuredProducts.map((product) => (
                <Grid key={product.sys.id} item xs={4}>
                  <ProductCard
                    imageSrc={product.image?.url}
                    price={product.price}
                    text={product.name}
                  ></ProductCard>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSection;
