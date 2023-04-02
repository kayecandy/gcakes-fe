import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { SX_MASKS } from "@/components/common/util/masks";
import { ADD_ORDER_URL } from "@/components/common/util/urls";
import { Backdrop, Box, Button, CircularProgress, Container, Grid, IconButton, Modal, Snackbar, TextField, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Fragment, useState } from "react";
import { useSession } from "@/components/common/hooks/useSession";
import { Image } from "@mui/icons-material";

const Style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: COLOR_PALLETE[4],
  borderRadius: "2rem",
  boxShadow: 20,
  width: 1000,
  height: 550,
};

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

type CartProps = {
  productId: string,
  imageUrl: string | any,
  price: number,
};

/* This is the AddToCart Form */
const AddToCart = ({ productId, imageUrl, price }: CartProps) => {
  const session = useSession();
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(session?.currentUser.address)

  //const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false); //If true, error message pops up
  const [isSubmitting, setIsSubmitting] = useState(false); //If true, disables the submit button
  const [open, setOpen] = useState(false); //If true, opens an order confirmation popup 

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  
  const handleSubmit = () => {
    console.info('Submitting Order...');
    console.info('Session: ', session?.currentUser.sys.id)
    setIsSubmitting(true);

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
        productId: [productId],
        quantity: [String(quantity)],
        deliveryAddress: deliveryAddress
      }),
    }).then(async (res) => {
      if (!res.ok) {
        //setSuccess(false);
        setFail(true);
        setIsSubmitting(false);
        throw await res.json();
      }

      return res.json().then((result) => {
        console.log(result);
        //setSuccess(true);
        setFail(false);
        setIsSubmitting(false);
        setOpen(true);
      });
    }).catch((error) => {
      console.log("errored", error);
      //setSuccess(false);
      setFail(true);
      setIsSubmitting(false);
    });
  }

  const addQuantity = () => { setQuantity(quantity + 1) }
  const removeQuantity = () => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity) }
  
  const action = (
    <Fragment>
      <Button size="small" onClick={handleClose}>
        CLOSE
      </Button>
    </Fragment>
  )

  return (
    
    <Box sx={Style} zIndex={1500}>
      <div
        //@ts-ignore
        style={{
          ...SX_MASKS[0]("top"),
          WebkitMaskSize: "200%",
          backgroundColor: 'white',
          position: "relative",
          textAlign: "center",
          // top: "25%",
          // left: "50%",
          // transform: "translate(-5%, 0%)",
          borderRadius: "2rem",
          width: 1000,
          height: 550,
          padding: 15
        }}
      >
        <Typography variant="h3" color={COLOR_PALLETE[2]} sx={{mt: 7}}>Add To Cart!</Typography>
        <Container
          sx={{
            display: "flex",
            maxHeight: "100%",
          }}
        >
          <div style={{
            maxWidth: "50%",
            maxHeight: 350,
            //backgroundColor: 'orange',
            borderRadius: '2rem',
            marginTop: 20,
            marginRight: 10,
            marginBottom: 20,
          }}>
            <img
              src={imageUrl}
              style={{
                objectFit: "contain",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </div>

          <div style={{
              //backgroundColor: 'pink',
              width: "50%",
              paddingTop: 25,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Delivery Address"
                  defaultValue={deliveryAddress}
                  onChange={(e) => {setDeliveryAddress(e.target.value)}}
                  multiline
                  rows={4}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Payment Method" disabled fullWidth/>
              </Grid>
              <Grid item xs={3}>
                <div style={{ display: "inline-flex" }}>
                  <IconButton onClick={removeQuantity}><RemoveCircleIcon fontSize="large"/></IconButton>
                  <Typography sx={{mt: 2}}>{quantity}</Typography>
                  <IconButton onClick={addQuantity}><AddCircleIcon fontSize="large"/></IconButton>
                </div>
              </Grid>
              <Grid item xs={9}>
                <div style={{ display: "inline-flex" }}>
                  <Typography variant="h5" sx={{mt: 1}}>Total Cost:&nbsp;</Typography>
                  <TextField value={String("Php " + price*quantity)} disabled/>
                </div>
              </Grid>
            </Grid>
          
            <Button variant="contained" type="submit" size="large"
              onClick={handleSubmit}
              disabled={isSubmitting || !session?.currentUser || !deliveryAddress?.length}
              sx={{mt: 3}}
            >
              Order & Checkout
            </Button>
            {isSubmitting && (
              <CircularProgress
              size={40}
              sx={{
                color: 'white',
                position: 'absolute',
                mt: 3,
                right: "25%",
              }}
              />
            )}
            

            <Typography>
              {!session?.currentUser ? <p style={{ fontSize: "75%", color: `red`, height: 0 }}>Must be logged in to order!</p> 
                : !deliveryAddress?.length ? <p style={{ fontSize: "75%", color: `red`, height: 0 }}>Please fill out required fields!</p>
                : fail ? <p style={{ fontSize: "75%", color: `red`, height: 0 }}>Server error occured. Please try again later!</p>  
                // : success ? <p style={{ fontSize: "75%", color: `green`, height: 0 }}>Order success!</p>
                : <p></p>
              }
            </Typography>
            <Snackbar
              open={open}
              autoHideDuration={10000}
              onClose={handleClose}
              message="Order has been made!"
              action={action}
              sx={{
                position: 'absolute',
                right: 0,
              }}
            />
          </div>
        </Container>
      </div>
    </Box>
  )
}

export default AddToCart;