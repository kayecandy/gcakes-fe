import { Box, Container, Typography, Grid, TextField, Rating } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FC } from "react";
import { Product } from "@/types/product";

type ReviewProps = {
    review: string | any;
}

const ProductReview: FC<ReviewProps> = ({ review }) => {
    return (
        <Box>
            <Grid container
                sx={{
                    mt: "5%",
                    width: 600,
                    display: "flex",
                    justifyItems: "right"
                }}
            >
                <Grid item xs={1}>
                    <AccountCircleIcon fontSize="large" />
                </Grid>

                <Grid item xs={11}>
                    <TextField
                        label="username"
                        defaultValue="Comments textbox"
                        multiline
                        rows={4}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Rating
                        name="simple-controlled"
                        value={3} 
                        readOnly
                        sx={{ float: "right" }}
                    />
                </Grid>
            </Grid>  
        </Box>
    );
}

export default ProductReview;