import {
    Box, Button, Card, CardActionArea,
    CardActions, CardContent, CardMedia,
    Chip, CircularProgress, Container, Grid,
    IconButton, Modal, Stack, Typography
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect, useState } from "react";
import { useViewedProduct } from "./hooks/useViewedProduct";
import ProductReview from "./ProductReview";
import { Product } from "@/types/product";
import { ApiResponse } from "@/types/api-response";
import { Review } from "@/types/review";
import { useViewedReviews } from "./hooks/useViewedReviews";
import { SX_MASKS } from "@/components/common/util/masks";
import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { Tags } from "./Tags";
import { AddReviewForm, AddReviewFormProps } from "../reviews/AddReviewForm";
import AddToCart from "./AddToCart";

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   borderRadius: "2rem",
//   boxShadow: 20,
//   width: 1000,
//   height: 550,
// };

type ViewProps = {
    productId: string,
};

const ViewForm = ({ productId }: ViewProps) => {
    const viewedProduct = useViewedProduct(productId);
    const [viewedReviews, setViewedReviews] = useViewedReviews(productId);
    const [open, setOpen] = useState(false);
    
    // When user clicks the product photo
    const handleOpen = () => {
        console.info('AddToCart opened.');
        setOpen(true);
    }

    const handleClose = () => {
        console.info('AddToCart closed.');
        setOpen(false);
    }

    const handleReviewAdded: AddReviewFormProps['onReviewAdded'] = (review) => {
        setViewedReviews({
            loading: false,
            value: [review, ...(viewedReviews.value ?? [])]
        })
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
        {viewedProduct.loading ? (
          <div style={{ position: "relative", top: "50%", left: "50%" }}>
            <CircularProgress />
            <Typography>Loading...</Typography>
          </div>
        ) : viewedProduct.value ? (
          <div>
            <Modal open={open} onClose={handleClose}>
              <AddToCart productId={productId}></AddToCart>
            </Modal>
            

            <div style={{ display: "inline-flex" }}>
              <Tags product={viewedProduct.value}></Tags>
            </div>

            <div // Contents | White Container
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
                <Grid
                  container
                  spacing={0}
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
                    <Card sx={{ position: "sticky", top: 0 }}>
                      <CardActionArea>
                        <CardMedia
                          sx={{
                            maxHeight: 450,
                            maxWidth: 550,
                            objectFit: "contain",
                          }}
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
                          onClick={handleOpen}
                        >
                          <ShoppingCartIcon fontSize="medium" /> &nbsp; Add to
                          Cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  {/** Review Section **/}
                  <Grid item xs={6}>
                    <Container>
                      <Typography variant="h4" sx={{ mt: 2 }}>
                        Reviews
                      </Typography>
                      {/** Review Components **/}
                      <div
                        style={{
                          maxWidth: "100%",
                        }}
                      >
                        <Stack>
                          {viewedReviews.loading ? (
                            <div style={{ position: "relative" }}>
                              <CircularProgress />
                              <Typography>Loading...</Typography>
                            </div>
                          ) : viewedReviews.value ? (
                            <>
                              {viewedReviews.value.map((review) => (
                                <ProductReview
                                  key={review.sys.id}
                                  review={review}
                                />
                              ))}
                            </>
                          ) : (
                            <>Errored...</>
                          )}
                        </Stack>
                      </div>

                      <AddReviewForm
                        onReviewAdded={handleReviewAdded}
                        productId={productId}
                      ></AddReviewForm>
                    </Container>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        ) : (
          // errored
          <div>Error...</div>
        )}
      </Box>
    );
}

export default ViewForm;