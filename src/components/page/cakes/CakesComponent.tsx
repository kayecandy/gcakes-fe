import { FC } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Button,
  Grid,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import style from './CakesSection.module.css';

type CakesCardProps = {
  cakeName: string;
  imageName: string;
};

const CakesCard: FC<CakesCardProps> = ({ imageName, cakeName }) => {
  var cakeImagePath = getImage(imageName);

  return (
    <>
      <Grid item md={4}>
        <Box
          sx={{
            bgcolor: "#d8cdcd",
          }}
        >
          <img className={style.itemImg} src="Cake3.png" alt="item 1" />
          <Button
            style={{
              width: "100%",
              justifyContent: "space-between",
              backgroundColor: "#FFB1B1",
              color: "#000000",
              textTransform: "none",
            }}
            variant="contained"
            size="medium"
            endIcon={<AddShoppingCartIcon />}
          >
            {cakeName}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default CakesCard;
