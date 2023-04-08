/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram } from "@mui/icons-material";
import { CardMedia, Grid, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { Container } from "@mui/system"
import { FC } from "react";

export const AboutHead: FC = () => {
    return (
        <Container
        sx={{
                maxWidth: "lg",
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
                    />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="subtitle1">
                        I&apos;m Gina, creator of G-cakes, started as a home business in 2007 in Jeddah, Saudi Arabia where my husband was working as an OFW. Time has come to go back home for good. And so here I am to share my passion in art of decorating baked goodies.
                        <br /><br />
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
        sx={{
                maxWidth: "lg",
                mt: 5,
                mb: 5,
            }}
        >
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <Typography variant="subtitle2">
                    SUCCESSFUL SCHOOL BAZAAR FEBRUARY 2020 WITH ALL ITEMS SOLD OUT DAILY
                </Typography>
            </div>

            <ImageList sx={{
                width: "100%",
                overflow: "hidden",
            }}
                cols={3}
                rowHeight={164}
            >
                <ImageListItem>
                    <img
                        src="/aboutpage_1.jpg"
                        alt="aboutpage_1.jpg"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/aboutpage_2.jpg"
                        alt="aboutpage_2.jpg"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="/aboutpage_3.jpg"
                        alt="aboutpage_3.jpg"
                    />
                </ImageListItem>
            </ImageList>
        </Container>
    )
}

export const AboutFoot: FC = () => {
    return (
        <Container
        sx={{
                maxWidth: "lg",
                mt: 5,
                mb: 5,
            }}
        >
            <Typography fontSize={"70%"} sx={{ display: "flex", justifyContent: "center" }}>
                LAS PIÑAS, METRO MANILA
            </Typography>
            <Typography fontSize={"70%"} sx={{ display: "flex", justifyContent: "center" }}>
                MOBILE/VIBER 0945 211 2668
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="https://www.facebook.com/gcakesbygina" target="_blank" >
                    <Facebook fontSize="large" />
                </Link>
                <Link href="https://www.instagram.com/gcakesbygina/" target="_blank" >
                    <Instagram fontSize="large" />
                </Link>
            </div>

        </Container>
    )
}
