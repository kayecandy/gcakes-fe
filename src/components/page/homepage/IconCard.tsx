import { AddCircleOutline, CakeOutlined, LocalShippingOutlined, PaymentOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FC } from "react";
import { EnumType } from "typescript";

function getIcon(type: string) {
    switch (type) {
        case "LocalShippingOutlined":
            return (
                <>
                    <LocalShippingOutlined
                        sx={{
                            fontSize: 100,
                        }}
                        color="primary"
                    ></LocalShippingOutlined>
                </>
            );
        case "AddCircleOutline":
            return (
                <>
                    <AddCircleOutline
                        sx={{
                            fontSize: 100,
                        }}
                        color="primary"
                    ></AddCircleOutline>
                </>
            );
        case "PaymentOutlined":
            return (
                <>
                    <PaymentOutlined
                        sx={{
                            fontSize: 100,
                        }}
                        color="primary"
                    ></PaymentOutlined>
                </>
            );
        case "CakeOutlined":
            return (
                <>
                    <CakeOutlined
                        sx={{
                            fontSize: 100,
                        }}
                        color="primary"
                    ></CakeOutlined>
                </>
            );
        default:
            return false;
    }
}

type IconCardProps = {
    text?: string;
    type: string;
}

const IconCard: FC<IconCardProps> = ({ text, type }) => {
    var icon = getIcon(type);
    return (
        <>
            {icon}
            <Typography variant="h5" color="secondary">
                Shipping
            </Typography>
            <Typography variant="body1">{text}</Typography>
        </>
    )
}

export default IconCard;