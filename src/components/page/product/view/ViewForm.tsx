import { SX_MASKS } from "@/components/common/masks";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Container, Grid, Rating, Stack, TextField, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import { COLOR_PALLETE } from "../../ThemeProvider";
import { useViewedProduct } from "./hooks/useViewedProduct";
import ProductReview from "./ProductReview";
import { Product } from "@/types/product";
import { ApiResponse } from "@/types/api-response";

type ViewProps = {
    productId: string | any,
};

const ViewForm = ({ productId }: ViewProps) => {
    const viewedProduct = useViewedProduct(productId);
    const [activeProduct, setActiveProduct] = useState<ApiResponse<Product>>({ loading: true });
    //const [activeReviews, setActiveReviews] = useState();


    //const viewedReviews = useViewedReviews();

    useEffect(() => {
        (
          window as typeof window & {
            setActiveProduct: typeof setActiveProduct;
          }
        ).setActiveProduct = setActiveProduct;
      }, [setActiveProduct]);

    useEffect(() => {
        console.log("Viewing product", viewedProduct);
        
        setActiveProduct({
            loading: false,
            value: viewedProduct, 
        });

    }, [viewedProduct]);

    useEffect(() => {
        console.log("Active product", activeProduct);
    }, [activeProduct]);

    const handleTagClick = () => {
        console.info('Tag clicked.');
    }
    
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
                padding: "5%",
                mb: "5%",
                //height: "120vh",
                zIndex: 0,
            }}
        >
            { viewedProduct.loading ? (
                <div>
                    Loading...
                </div>
            ):
                viewedProduct.value ? (
                    <div>
                        <div style={{ display: "inline-flex" }}>
                            <Typography variant="h6" sx={{ mr: "15px", }}>
                                Item: {viewedProduct.value[0]?.sys.id}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label={String(viewedProduct.value[0]?.productType).toUpperCase()} onClick={handleTagClick} color="primary" />
                                <Chip label="Tag 2" onClick={handleTagClick} />
                                <Chip label="Tag 3" onClick={handleTagClick} />
                            </Stack>
                        </div>
                        
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
                                    pb: 10,
                                    display: "flex",
                                    // justifyContent: "center",
                                    // alignItems: "center",
                                    //backgroundColor: `pink`,
                                }}
                                maxWidth="lg"
                            >
                                <Grid container spacing={5}>
                                    <Grid item>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia sx={{ maxHeight: 650, maxWidth: 450 }}
                                                component="img"
                                                image={viewedProduct.value[0]?.image.url}
                                                alt="product"
                                                />
                                                <CardContent sx={{ maxWidth: 450 }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {viewedProduct.value[0]?.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {viewedProduct.value[0]?.description}
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                    //variant="contained"
                                                    size="large"
                                                    color="success"
                                                    fullWidth
                                                >
                                                    <ShoppingCartIcon fontSize="medium" /> &nbsp; Add to Cart
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Container>
                                            <Typography variant="h5">
                                                Reviews for {viewedProduct.value[0]?.name}
                                            </Typography>
                                            {/** Review Components **/}
                                            <div style={{ overflowY: "visible", maxHeight: 650 }}>
                                                <ProductReview review={"null"} />
                                                <ProductReview review={"null"} />
                                                <ProductReview review={"null"} />
                                                <ProductReview review={"null"} />
                                            </div>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>  
                    </div>
            ) : ( // errored
                <div>
                       Error...     
                </div>
            )}
        </Box>
    );
}

export default ViewForm;