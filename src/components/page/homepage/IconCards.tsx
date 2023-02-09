import { AddCircleOutline, CakeOutlined, LocalShippingOutlined, PaymentOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FC } from "react";

export const IconCard1: FC = ({ }) => {
    return (
        <>
            <LocalShippingOutlined
                sx={{
                    fontSize: 100,
                }}
                color="primary"
            ></LocalShippingOutlined>
            <Typography variant="h5" color="secondary">
                Shipping
            </Typography>
            <Typography variant="body1">Some shipping text here</Typography>
        </>
    );
}

export const IconCard2: FC = ({ }) => {
    return (
        <>
            <AddCircleOutline
                sx={{
                    fontSize: 100,
                }}
                color="primary"
            ></AddCircleOutline>
            <Typography variant="h5" color="secondary">
                Add Something
            </Typography>
            <Typography variant="body1">Some shipping text here</Typography>
        </>
    );
}

export const IconCard3: FC = ({ }) => {
    return (<>
        <PaymentOutlined
            sx={{
                fontSize: 100,
            }}
            color="primary"
        ></PaymentOutlined>
        <Typography variant="h5" color="secondary">
            Payments
        </Typography>
        <Typography variant="body1">Some shipping text here</Typography>
    </>
    );
}

export const IconCard4: FC = ({ }) => {
    return (
        <>
            <CakeOutlined
                sx={{
                    fontSize: 100,
                }}
                color="primary"
            ></CakeOutlined>
            <Typography variant="h5" color="secondary">
                Cake(?)
            </Typography>
            <Typography variant="body1">Some shipping text here</Typography>
        </>
    );
}
