import { Facebook, Instagram } from "@mui/icons-material";
import { CardMedia, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system"
import { FC } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";

export const AboutHead: FC = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                mt: 5,
                mb: 5,
            }}
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
        <Container
            maxWidth="lg"
            sx={{
                mt: 5,
                mb: 5,
            }}
        >
            SUCCESSFUL SCHOOL BAZAAR FEBRUARY 2020 WITH ALL ITEMS SOLD OUT DAILY
            <Grid container>
                <Grid item xs={4}>
                    <CardMedia
                        component="img"
                        image="/aboutpage_1.jpg"
                        alt="bazaar1"
                    //height="194"
                    />
                </Grid>
                <Grid item xs={4}>
                    <CardMedia
                        component="img"
                        image="/aboutpage_2.jpg"
                        alt="bazaar2"
                    //height="194"
                    />
                </Grid>
                <Grid item xs={4}>
                    <CardMedia
                        component="img"
                        image="/aboutpage_3.jpg"
                        alt="bazaar3s"
                    //height="194"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export const AboutFoot: FC = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                mt: 5,
                mb: 5,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            }}
        >
            <Typography fontSize={"70%"}>
                LAS PIÑAS, METRO MANILA
            </Typography>
            <Typography fontSize={"70%"}>
                MOBILE/VIBER 0945 211 2668
            </Typography>
            <Link href="https://www.facebook.com/" target="_blank">
                <Facebook fontSize="large" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
                <Instagram fontSize="large" />
            </Link>
        </Container>
    )
}