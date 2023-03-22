import { SX_MASKS } from "@/components/common/masks";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Container, Grid, IconButton, Modal, Rating, Stack, TextField, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect, useState } from "react";
import { COLOR_PALLETE } from "../../ThemeProvider";
import { useViewedProduct } from "./hooks/useViewedProduct";
import ProductReview from "./ProductReview";
import { Product } from "@/types/product";
import { ApiResponse } from "@/types/api-response";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '2rem',
    boxShadow: 20,
    width: 1000,
    height: 550,
}

type ViewProps = {
    productId: string | any,
};

const ViewForm = ({ productId }: ViewProps) => {
    const viewedProduct = useViewedProduct(productId);
    const [activeProduct, setActiveProduct] = useState<ApiResponse<Product>>({ loading: true });
    const [open, setOpen] = useState(false);
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
        
        // setActiveProduct({
        //     loading: false,
        //     value: viewedProduct, 
        // });

    }, [viewedProduct]);

    useEffect(() => {
        console.log("Active product", activeProduct);
    }, [activeProduct]);

    // When user clicks a tag
    const handleTagClick = () => {
        console.info('Tag clicked.');
    }

    // When user clicks the product photo
    const handleOpen = () => {
        console.info('Modal opened.');
        setOpen(true);
    }

    const handleClose = () => {
        console.info('Modal closed.');
        setOpen(false);
    }
    
    
    return (
        <Box // outer background
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
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <Box sx={modalStyle} zIndex={1000}>
                                <IconButton onClick={handleClose} sx={{display: 'block', position: 'relative', left: '95%', top: '1%'}}>
                                    <CloseOutlinedIcon />
                                </IconButton>
                                
                                <div style={{position: 'relative', top: '25%', left: '50%', transform: 'translate(-5%, 0%)'}}>
                                    <Typography variant="h5">Modal Text</Typography>
                                </div>
                                 
                            </Box>
                        </Modal>

                        <div style={{ display: "inline-flex" }}>
                            <Typography variant="h6" sx={{ mr: "15px", }}>
                                Item: {viewedProduct.value.sys.id}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label={String(viewedProduct.value.productType).toUpperCase()} onClick={handleTagClick} color="primary" />
                                <Chip label="Tag 2" onClick={handleTagClick} />
                                <Chip label="Tag 3" onClick={handleTagClick} />
                            </Stack>
                        </div>
                        
                        <div    // Contents | White Container
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
                                    display: "flex",
                                    //backgroundColor: `gray`, //
                                    maxHeight: 750,
                                }}
                                maxWidth="xl"
                            >
                                <Grid container spacing={5}
                                    sx={{
                                        maxWidth: "100%",
                                        //backgroundColor: 'orange', //
                                        overflowY: "auto",
                                        //maxHeight: 650,
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {/** Product Details Section **/}
                                    <Grid item>
                                        <Card sx={{position: "sticky", top: 0, }}>
                                            <CardActionArea>
                                                <CardMedia sx={{ maxHeight: 450, maxWidth: 550 }}
                                                    component="img"
                                                    image={viewedProduct.value.image?.url}
                                                    alt="product"
                                                    onClick={handleOpen}
                                                />
                                                <CardContent sx={{ maxWidth: 450 }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {viewedProduct.value.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {viewedProduct.value.description}
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

                                    {/** Review Section **/}
                                    <Grid item xs={6}> 
                                        <Container>
                                            <Typography variant="h4" sx={{ mt: 2, }}>
                                                Reviews
                                            </Typography>
                                            {/** Review Components **/}
                                            <div style={{
                                                //maxHeight: "100%",
                                                maxWidth: "100%",
                                                backgroundColor: `white`, //
                                            }}>
                                                <ProductReview review={"null"} />
                                                <ProductReview review={"null"} />
                                                <ProductReview review={"null"} />
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