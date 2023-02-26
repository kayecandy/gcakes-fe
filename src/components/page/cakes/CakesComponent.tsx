import { FC } from "react";
import { Grid, Button } from '@mui/material';

import style from './CakesSection.module.css';
import { Box } from "@mui/system";
import { grey } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function getImage(imageName: string) {


    return imageName;
}

type CakesCardProps = {
    cakeName: string;
    imageName: string;
}

const CakesCard: FC<CakesCardProps> = ({ imageName, cakeName }) => {
    var cakeImagePath = getImage(imageName);

    return (
        <>
            <Grid item md={4}>
                <Box sx={{
                    bgcolor: '#d8cdcd',
                }}>
                    <img className={style.itemImg} src="Cake3.png" alt="item 1" />
                    <Button style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFB1B1',
                        color: '#000000',
                        textTransform: 'none'
                    }} variant="contained" size="medium" endIcon={<AddShoppingCartIcon />}>{cakeName}</Button>
                </Box>
            </Grid>
        </>
    )
}

export default CakesCard;