import { FC } from "react";
import { Grid, Button } from '@mui/material';

import style from '@/components/common/ProductComponent.module.css';
import { Box } from "@mui/system";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


type ItemCardProps = {
    itemName: string;
    imageUrl?: string;
}

export const ItemCard: FC<ItemCardProps> = ({ itemName, imageUrl }) => {

    return (
        <>
            <Grid item md={4} padding={2}>
                <Box sx={{
                    bgcolor: '#d8cdcd',
                }}>
                    <img className={style.itemImg} src={imageUrl} alt={itemName} />
                    <Button style={{
                        width: '100%',
                        height: '50px',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFB1B1',
                        color: '#000000',
                        textTransform: 'none'
                    }} variant="contained" size="medium" endIcon={<AddShoppingCartIcon />}>{itemName}</Button>
                </Box>
            </Grid>
        </>
    )
}

export const ItemCardSkeleton = () => {

    return (
        <>
            <Grid item md={4} padding={2}>
                <Box sx={{
                    bgcolor: '#d8cdcd',
                }}>
                    <img className={style.itemImg} src="placeholder-image.png" alt="placeholder" />
                    <Button style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFB1B1',
                        color: '#000000',
                        textTransform: 'none'
                    }} variant="contained" size="medium" endIcon={<AddShoppingCartIcon />}>Place Holder</Button>
                </Box>
            </Grid>
        </>
    )
}