import { SX_MASKS } from "@/components/common/masks";
import { Box, Button, Container, Grid, Rating, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";

type ViewProps = {
    productType: string | any,
};

const ViewForm = ({ productType }: ViewProps) => {

    console.log("props: ", productType);

    return (
        <Box
        sx={{
            ...SX_MASKS[1]("bottom"),
            position: "relative",
            overflow: "hidden",
            backgroundColor: `${COLOR_PALLETE[0]}C0`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
            backgroundPositionY: "90%",
            //display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25%",
            //height: "120vh",
            zIndex: 0,
            }}
        >
            <Typography variant="h6">
                Item: {productType}
            </Typography>

            <div    // Contents
                style={{
                    flexGrow: 1,
                    backgroundColor: `white`,
                    padding: "3vw",
                    borderRadius: "2rem",
                    borderWidth: "5px",
                    borderColor: COLOR_PALLETE[0],
                    borderStyle: "solid",
                }}
            >
                <Container
                    sx={{
                        textAlign: "center",
                        pb: 10,
                    }}
                        maxWidth="sm"
                >
                    <Grid container
                        sx={{
                            mb: "5%"
                        }}
                    >
                        <Grid item xs={8}
                            sx={{
                                backgroundColor: `gray`,
                            }}
                        >
                            Thumbnail
                        </Grid>
                        <Grid item xs={4}
                            sx={{
                                backgroundColor: `pink`,
                            }}
                        >
                            Details Pane
                            <Button
                                variant="contained"
                                type="submit"
                            >
                                Add to Cart
                            </Button>
                        </Grid>
                    </Grid>
                    
                    <Typography variant="h6">
                        Leave a Review
                    </Typography>
                    <Grid container
                        sx={{
                            //mb: "5%"
                        }}
                    >
                        <Grid item xs={9}
                            sx={{
                                backgroundColor: `${COLOR_PALLETE[0]}C0`,
                            }}
                        >
                            <TextField
                                label="Comments textbox"
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={3}
                            sx={{
                                //backgroundColor: `white`,
                            }}
                        >
                            <Rating
                                name="simple-controlled"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            
        </Box>
    )
}

export default ViewForm;