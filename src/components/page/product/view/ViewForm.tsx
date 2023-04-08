import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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
import Image from "next/image";
import { Quantity } from "@/components/common/quantity/Quantity";
import { FavoriteBorder } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "2rem",
  boxShadow: 20,
  width: 1000,
  height: 550,
};

type ViewProps = {
  productId: string;
};

const ViewForm = ({ productId }: ViewProps) => {
  const viewedProduct = useViewedProduct(productId);
  const [viewedReviews, setViewedReviews] = useViewedReviews(productId);
  const [open, setOpen] = useState(false);

  // When user clicks the product photo
  const handleOpen = () => {
    console.info("Modal opened.");
    setOpen(true);
  };

  const handleClose = () => {
    console.info("Modal closed.");
    setOpen(false);
  };

  const handleReviewAdded: AddReviewFormProps["onReviewAdded"] = (review) => {
    setViewedReviews({
      loading: false,
      value: [review, ...(viewedReviews.value ?? [])],
    });
  };

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
            <Box sx={modalStyle} zIndex={1500}>
              <IconButton
                onClick={handleClose}
                sx={{
                  display: "block",
                  position: "relative",
                  left: "95%",
                  top: "1%",
                }}
              >
                <CloseOutlinedIcon />
              </IconButton>

              <div
                style={{
                  position: "relative",
                  top: "25%",
                  left: "50%",
                  transform: "translate(-5%, 0%)",
                }}
              >
                <Typography variant="h5">Modal Text</Typography>
              </div>
            </Box>
          </Modal>


          <div // Contents | White Container
            style={{
              flexGrow: 1,
              // backgroundColor: `white`,
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
                columnSpacing={4}
              >
                {/** Product Details Section **/}
                <Grid item>
                  <Box
                    sx={{
                      // backgroundColor: "white",
                    }}
                  >
                    <Image
                      src={viewedProduct.value.image?.url ?? ""}
                      alt={viewedProduct.value.name}
                      width={500}
                      height={500}
                    ></Image>
                  </Box>
                </Grid>

                {/** Review Section **/}
                <Grid item xs={6}>
                  <Box
                    sx={{
                      // background: "white",
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "500 !important",
                      }}
                    >
                      {viewedProduct.value.name}
                    </Typography>
                    <Typography variant="h6">
                      &#8369;{viewedProduct.value.price}
                    </Typography>
                      <Typography variant="body1" sx={{
                      mb: 5
                    }}>
                      {viewedProduct.value.description}
                    </Typography>

                    <Grid container columnSpacing={4}>
                        <Grid item>
                          <Quantity></Quantity>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          sx={{
                            py: 1.5,
                            px: 3,
                          }}
                          startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                        >
                          Add to cart
                          </Button>
                          
                          
                      </Grid>
                      </Grid>
                      
                      <Button sx={{
                        mt: 4,
                        mb: 5
                      }} variant="text" startIcon={<FavoriteBorder></FavoriteBorder>}>
                            Add to favorites
                      </Button>
                      
            <Tags product={viewedProduct.value}></Tags>

                  </Box>
                </Grid>
              </Grid>
            </Container>

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
                        <ProductReview key={review.sys.id} review={review} />
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
          </div>
        </div>
      ) : (
        // errored
        <div>Error...</div>
      )}
    </Box>
  );
};

export default ViewForm;
