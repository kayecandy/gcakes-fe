import { CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system"
import { FC } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";

export const AboutHead: FC = () => {
    return (
        <Container
            maxWidth="lg"
        >
            <Grid container
                spacing={3}
            >
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        image="/aboutGina.jpg"
                        alt="about Gina"
                    //height="194"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle1">
                        I'm Gina, creator of G-cakes, started as a home business in 2007 in Jeddah, Saudi Arabia where my husband was working as an OFW. Time has come to go back home for good. And so here I am to share my passion in art of decorating baked goodies.
                    </Typography>
                    <br />
                    <Typography variant="subtitle1">
                        G-cakes is a legitimate cake business with sales receipts and official receipts.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export const AboutBody: FC = () => {
    return (
        <>
            body
        </>
    )
}

export const AboutFoot: FC = () => {
    return (
        <>
            foot
        </>
    )
}