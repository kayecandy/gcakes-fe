/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Grid, Button } from '@mui/material';

import style from '@/components/common/ProductComponent.module.css';
import { Box } from "@mui/system";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product } from "@/types/product";
import Link from "next/link";


type ItemCardProps = {
    product: Product
}

export const ItemCard: FC<ItemCardProps> = ({ product }) => {

    return (
        <>
            <Grid item md={4} padding={2}>
                <Box sx={{
                    bgcolor: '#d8cdcd',
                }}>
                    <Link href={`/product/view/${product.sys.id}`}>
                        <img className={style.itemImg} src={product.image?.url} alt={product.name} />
                    </Link>
                    <Button style={{
                        width: '100%',
                        height: '50px',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFB1B1',
                        color: '#000000',
                        textTransform: 'none'
                    }} variant="contained" size="medium" endIcon={<AddShoppingCartIcon />}>{product.name}</Button>
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