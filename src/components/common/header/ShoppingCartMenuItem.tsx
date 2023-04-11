import { useSession } from "@/components/common/hooks/useSession";
import { Avatar, Backdrop, Box, Button, CircularProgress, Dialog, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { FC, Fragment, useEffect, useState } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";
import MenuItem from "./MenuItem";
import { ShoppingCart } from "@mui/icons-material";
import { SX_MASKS } from "../util/masks";
import { ADD_ORDER_URL } from "../util/urls";
import { useDisplayCart } from "./hooks/useDisplayCart";
import { Product } from "@/types/product";

function dateNow() {
  var timestamp = Date.now();
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var mins = ('0' + date.getMinutes()).slice(-2);
  var sec = ('0' + date.getSeconds()).slice(-2);
  var milli = ('00' + date.getMilliseconds()).slice(-3);
  var utc = '+08:00';
  return String(year+'-'+month+'-'+day+'T'+hours+':'+mins+':'+sec+'.'+milli+utc)
}

/* Parses `items` and `numItems` of the session storage and returns a tuple containing:
 *    - [items] <= array of productIds
 *    - [numItems] <= array of quantities
 */
function parseCartStorage() {
  if (typeof window !== 'undefined') {
    const items = String(sessionStorage.getItem('items')).replace(/["]+/g,'')?.split('-');
    const numItems = String(sessionStorage.getItem('numItems')).replace(/["]+/g, '')?.split('-');
    return [items, numItems];
  } else {
    return [[], []];
  }
}

function getProductsToDisplay(products: Product[] | undefined = []): [Product[], number[]] {
  const [items, numItems] = parseCartStorage();
  const displayList: Product[] = [];
  const displayNumList: number[] = [];
  let i = 0;

  products.map((product) => {
    if(items.includes(product.sys.id)) {
      displayList.push(product);
      displayNumList.push(Number(numItems[i]));
      i++;
    }
  })

  return [displayList, displayNumList];
}

export const ShoppingCartDialogMenuItem: FC = ({ }) => {
  const allItems = useDisplayCart();
  let viewedCart = getProductsToDisplay(allItems.value);

  const [open, setOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClear = () => {
    sessionStorage.removeItem('items'); 
    sessionStorage.removeItem('numItems');
    setOpen(false);
  }

  const session = useSession();

  useEffect(() => {
    if (session) {
      setOpen(false);
    }
  }, [session])

  useEffect(() => {
    const [items, numItems] = parseCartStorage();
    setSuccess(false);
    //console.log("Session storage", sessionStorage.getItem('items'), sessionStorage.getItem('numItems'));
    console.log("Cart: ", items, numItems);
    //console.log("viewing: ", viewedCart);
  }, [open])

  // Retrieve sessionStorage contents
  const handleCheckout = () => {
    console.info('Checking out...');
    setIsCheckout(true);

    const [items, numItems] = parseCartStorage();

    console.log("Items at Checkout: ", items, numItems);

    fetch(`${ADD_ORDER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        status: "Pending",
        date: dateNow(),
        userId: session?.currentUser.sys.id,
        productId: items,
        quantity: numItems,
        deliveryAddress: session?.currentUser.address,
      }),
    }).then(async (res) => {
      if (!res.ok) {
        throw await res.json();
      }

      return res.json().then((result) => {
        console.log(result);
        setSuccess(true);
        setIsCheckout(false);

        // drop items from cart
        sessionStorage.removeItem('items'); 
        sessionStorage.removeItem('numItems');
        console.log("Cart cleared");
      });
    }).catch((error) => {
      console.log("errored", error);
      setIsCheckout(false);
    });
  }

  return (
    <>
      <MenuItem
        sx={{
          mx: 0,
          px: 0,
          borderRadius: 50,
        }}
        href="#"
        onClick={handleOpen}
      >
        <ShoppingCart sx={{
          color: COLOR_PALLETE[2]
        }} fontSize="large"></ShoppingCart>
      </MenuItem>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
        scroll="body"
      >
        {/* Contents */}
        <div
          style={{
            flexGrow: 1,
            backgroundColor: `white`,
            borderRadius: "2rem",
            borderWidth: "5px",
            borderColor: COLOR_PALLETE[4],
            borderStyle: "solid",
            overflow: "hidden",
          }}
        >
          {isCheckout && (
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          <Box
            sx={{
              backgroundColor: COLOR_PALLETE[4],
              textAlign: "center",
              ...SX_MASKS[0]("bottom"),
              pt: 2,
              pb: 5,
              mb: "1px",
              WebkitMaskSize: "240%",
              width: 650,
            }}
          >
            <Typography variant='h5' sx={{ mt:1, mb:1, }}>Shopping Cart</Typography>
            <List
              sx={{
                bgcolor: 'white'
              }}
            >
              {((viewedCart[0].length > 0) && !success) ? (
                viewedCart[0].map((item, num) => {
                  //console.log('item: ', item);
                  return (
                    <>
                      <ListItem key={item.sys.id} sx={{ marginBottom: 1 }}>
                        <ListItemAvatar>
                          <img
                            alt="product"
                            src={item.image?.url}
                            style={{
                              width: 50,
                              height: 50,
                              objectFit: 'cover',
                              borderRadius: 5,
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <Fragment>
                              <Typography
                                variant='body1'
                                sx={{fontWeight: 1}}
                              >
                                Quantity: {viewedCart[1][num]} | Price per Item: Php {Number(item.price).toFixed(2)}
                              </Typography>
                              <Typography
                                variant='body1'
                              >
                                Total Price: Php {Number(viewedCart[1][num]*item.price).toFixed(2)}
                              </Typography>
                            </Fragment>
                          }
                          sx={{ml: 3}}
                        />
                      </ListItem>
                      <Divider />
                    </>
                  );
                })
              ) : (!(viewedCart[0].length > 0) && !success) ? (
                  <ListItem>
                    <ListItemText
                      sx={{textAlign: 'center'}}
                    >
                      No Items to Display in Cart
                    </ListItemText>
                  </ListItem>
                ) : success ? (
                    <ListItem>
                      <ListItemText
                        sx={{textAlign: 'center'}}
                      >
                        Order Placed Successfully!
                      </ListItemText>
                    </ListItem>
                  ) : (
                      <>
                      </>
              )}
            </List>
            <div
              style={{
                display: 'inline-flex',
              }}
            >
              <Button
                onClick={handleCheckout}
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  m: 1,
                }}
                disabled={
                  (!(viewedCart[0].length > 0) && !success)
                }
              >
                Checkout
              </Button>
              <Button
                onClick={handleClear}
                variant="outlined"
                type="submit"
                size="large"
                sx={{
                  m: 1,
                }}
              >
                Clear Cart
              </Button>
            </div>
          </Box>
        </div>
      </Dialog>
    </>
  );
};

