import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { Quantity } from "@/components/common/quantity/Quantity";
import { SX_MASKS } from "@/components/common/util/masks";
import {
  FavoriteBorder,
  RateReview,
  RateReviewOutlined,
} from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Grid,
  IconButton,
  Modal,
  Pagination,
  Typography,
  emphasize,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { AddReviewForm, AddReviewFormProps } from "../reviews/AddReviewForm";
import ProductReview from "./ProductReview";
import { Tags } from "./Tags";
import { useViewedProduct } from "./hooks/useViewedProduct";
import { useViewedReviews } from "./hooks/useViewedReviews";
import { ProductReviews } from "./ProductReviews";
import { useSession } from "@/components/common/hooks/useSession";

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
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const session = useSession();

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
        // ...SX_MASKS[1]("bottom"),
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
        // backgroundColor: `${COLOR_PALLETE[0]}C0`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "90%",
        //display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 8,
        pb: 20,
        // mb: "5%",
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
              // padding: "3vw",
              // borderRadius: "2rem",
              // borderWidth: "5px",
              // borderColor: COLOR_PALLETE[0],
              // borderStyle: "solid",
            }}
          >
            <Container
              sx={{
                display: "flex",
                //backgroundColor: `gray`, //
                maxWidth: "lg"
              }}
            >
              <Grid
                container
                spacing={0}
                sx={{
                  flexWrap: "nowrap",
                  alignItems: "center",
                }}
                columnSpacing={4}
              >
                {/** Product Image Section **/}
                <Grid item xs={5}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      // backgroundImage: `url(${
                      //   viewedProduct.value.image?.url ?? ""
                      // })`,
                      backgroundImage: "url(/white-concrete-wall.jpeg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
                      borderRadius: "2rem",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      src={viewedProduct.value.image?.url ?? ""}
                      alt={viewedProduct.value.name}
                      width={500}
                      height={500}
                    ></Image>
                  </Box>
                </Grid>

                {/* Product Description Section */}
                <Grid item sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      // background: "white",
                      p: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Silverstar",
                        fontSize: "8rem",
                        lineHeight: "100%",
                        marginBottom: "-3.3rem",
                        color: COLOR_PALLETE[3],
                        position: "relative",
                        zIndex: 1,
                        textTransform:
                          viewedProduct.value.productType ===
                          "decorated_cookies"
                            ? "lowercase"
                            : "capitalize",
                      }}
                    >
                      {viewedProduct.value.productType.replace("_", " ")}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "500 !important",
                        wordBreak: "break-all",
                        mb: 1,
                      }}
                    >
                      {viewedProduct.value.name}
                    </Typography>
                    <Tags product={viewedProduct.value}></Tags>

                    <Typography
                      variant="h6"
                      sx={{
                        my: 3,
                        color: emphasize(COLOR_PALLETE[3], 0.7),
                      }}
                      fontWeight={700}
                    >
                      &#8369;{viewedProduct.value.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 6,
                      }}
                    >
                      {viewedProduct.value.description}
                    </Typography>

                    <Grid
                      sx={{
                        mb: 3,
                      }}
                      container
                      columnSpacing={4}
                    >
                      <Grid item>
                        <Quantity></Quantity>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
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

                    <Button
                      sx={{
                        mt: 4,
                        mb: 5,
                        color: COLOR_PALLETE[2],
                      }}
                      variant="text"
                      startIcon={<FavoriteBorder></FavoriteBorder>}
                    >
                      Add to favorites
                    </Button>

                    <Button
                      sx={{
                        mt: 4,
                        mb: 5,
                        ml: 3,
                        color: COLOR_PALLETE[2],
                      }}
                      onClick={() => {
                        if (session) {
                          setReviewModalOpen(true);
                        }
                      }}
                      variant="text"
                      startIcon={<RateReviewOutlined></RateReviewOutlined>}
                    >
                      {session ? "Add a review" : "Login to add a review"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>

            {/** Review Section **/}
            <ProductReviews
                reviews={viewedReviews}
            ></ProductReviews>

            {/* Review Modal */}
            <Dialog
              open={reviewModalOpen}
              onClose={() => setReviewModalOpen(false)}
              PaperProps={{
                sx: {
                  background: "transparent",
                  boxShadow: "none",
                },
              }}
              scroll="body"
            >
              <AddReviewForm
                  productId={viewedProduct.value.sys.id}
                  onReviewAdded={handleReviewAdded}
              ></AddReviewForm>
            </Dialog>
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
