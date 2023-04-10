import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { Quantity } from "@/components/common/quantity/Quantity";
import {
  FavoriteBorder,
  RateReviewOutlined,
} from "@mui/icons-material";
//import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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
  Snackbar,
  Typography,
  emphasize,
} from "@mui/material";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { AddReviewForm, AddReviewFormProps } from "../reviews/AddReviewForm";
import { Tags } from "./Tags";
import { useViewedProduct } from "./hooks/useViewedProduct";
import { useViewedReviews } from "./hooks/useViewedReviews";
import { ProductReviews } from "./ProductReviews";
import { useSession } from "@/components/common/hooks/useSession";
import AddToCart from "./AddToCart";

/* This function takes 2 parameters: product and cart.
 * It returns true if the product is in the cart, false otherwise.
 * 
 * Parameters:
 *  product - product id
 *  cart - sessionStorage of 'items'
*/
function isInCart(product: string, cart: any) {
  // Parse cart to list
  var items = String(sessionStorage.getItem('items')).replace(/["]+/g, '')?.split('-');

  if (items.includes(product)) {
    return true;
  }
  return false;
}

type ViewProps = {
  productId: string;
};

const ViewForm = ({ productId }: ViewProps) => {
  const viewedProduct = useViewedProduct(productId);
  const [viewedReviews, setViewedReviews] = useViewedReviews(productId);
  const [open, setOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const session = useSession();
  const [quantity, setQuantity] = useState(1);

  const [fail, setFail] = useState(false); //If true, error message pops up
  const [isCheckout, setisCheckout] = useState(false); //If true, disables the submit button
  const [isAddCart, setisAddCart] = useState(isInCart(productId, sessionStorage.getItem('items'))); // If user pressed Add To Cart button

  const [items, setItems] = useState(sessionStorage.getItem('items')); // sessionStorage for Add To Cart
  const [numItems, setNumItems] = useState(sessionStorage.getItem('numItems')) // sessionStorage for Add To Cart

  const handleAddCart = () => {
    if (isAddCart) {
      console.log("Already added this item to cart!");
      return;
    }
    console.log("Adding to cart...");
    setisAddCart(true);
    
    console.log("Adding to sessionStorage: ", productId, quantity);

    if (items == null && numItems == null) {
      sessionStorage.setItem('items', JSON.stringify(productId));
      sessionStorage.setItem('numItems', JSON.stringify(String(quantity)));
    } else {
      let currItems = JSON.parse(String(items));
      let currNumItems = JSON.parse(String(numItems));
      sessionStorage.setItem('items', JSON.stringify(currItems + '-' + productId));
      sessionStorage.setItem('numItems', JSON.stringify(currNumItems + '-' + String(quantity)));
    }
    
    console.log("After adding to cart: ", sessionStorage.getItem('items'), sessionStorage.getItem('numItems'));
  }

  useEffect(() => {
    console.log("Current cart: ", items, numItems);
  }, []);
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleReviewAdded: AddReviewFormProps["onReviewAdded"] = (review) => {
    setViewedReviews({
      loading: false,
      value: [review, ...(viewedReviews.value ?? [])],
    });
  };

  const cartAction = (
    <Fragment>
      <Button
        size="small"
        /*onClick={viewCart}*/
      >
        View Cart
      </Button>
    </Fragment>
  )

  return (
    <Box // outer background
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "90%",
        justifyContent: "center",
        alignItems: "center",
        pt: 8,
        pb: 20,
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
          <div // Contents | White Container
            style={{
              flexGrow: 1,
            }}
          >
            <Container
              sx={{
                display: "flex",
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
                            onClick={handleAddCart}
                            disabled={isAddCart || !session?.currentUser}
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

      {/* Popups */}
      <Snackbar
        open={isAddCart}
        autoHideDuration={10000}
        onClose={handleClose}
        message={"Item added to cart!"}
        //action={cartAction}
        sx={{
          zIndex: 7000,
        }}
      />
    </Box>
  );
};

export default ViewForm;
