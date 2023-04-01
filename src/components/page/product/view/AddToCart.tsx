import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { SX_MASKS } from "@/components/common/util/masks";
import { ADD_ORDER_URL } from "@/components/common/util/urls";
import { Backdrop, Box, Button, CircularProgress, Container, Grid, IconButton, Modal, TextField, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from "react";
import { useSession } from "@/components/common/hooks/useSession";
import { Image } from "@mui/icons-material";

const Style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "2rem",
  boxShadow: 20,
  width: 1000,
  height: 550,
  ...SX_MASKS[0]("bottom"),
  WebkitMaskSize: "150%",
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
};

/* This is the AddToCart Form */
const AddToCart = ({ productId, imageUrl }: CartProps) => {
  const session = useSession();
  const [quantity, setQuantity] = useState(1);

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
        deliveryAddress: "Bikini Bottom"
      }),
    }).then(async (res) => {
      if (!res.ok) {
        setSuccess(false);
        setFail(true);
        setIsSubmitting(false);
        throw await res.json();
      }

      return res.json().then((result) => {
        console.log(result);
        setSuccess(true);
        setFail(false);
        setIsSubmitting(false);
      });
    }).catch((error) => {
      console.log("errored", error);
      setSuccess(false);
      setFail(true);
      setIsSubmitting(false);
    });
  }

  const addQuantity = () => { setQuantity(quantity + 1) }
  const removeQuantity = () => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity) }

  return (
    //@ts-ignore
    <Box sx={Style} zIndex={1500}>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          // top: "25%",
          // left: "50%",
          // transform: "translate(-5%, 0%)",
          borderRadius: "2rem",
          width: 1000,
          height: 550,
          padding: 15,
        }}
      >
        <Typography variant="h3" color={COLOR_PALLETE[2]} sx={{mt: 2}}>Add To Cart!</Typography>
        <Container
          sx={{
            display: "flex",
            maxHeight: "100%",
          }}
        >
          <div style={{
            maxWidth: "50%",
            //backgroundColor: 'orange',
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
                  defaultValue={session?.currentUser.address}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Payment Method" disabled />
              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "inline-flex" }}>
                  <IconButton onClick={removeQuantity}><RemoveCircleIcon fontSize="large"/></IconButton>
                  <Typography sx={{mt: 2}}>{quantity}</Typography>
                  <IconButton onClick={addQuantity}><AddCircleIcon fontSize="large"/></IconButton>
                </div>
              </Grid>
            </Grid>
          
            <Button variant="contained" type="submit" size="large"
              onClick={handleSubmit}
              disabled={isSubmitting || !session?.currentUser}
              sx={{mt: 3}}
            >
              Order!
            </Button>

            <Typography>
              { success ? <p style={{ fontSize: "75%", color: `green`, height: 0 }}>Order success!</p>
                  : fail ? <p style={{ fontSize: "75%", color: `red`, height: 0 }}>Unknown error occured!</p>
                  : <p></p> }
              {!session?.currentUser ? <p style={{ fontSize: "75%", color: `red`, height: 0 }}>Must be logged in to order!</p> : <p></p>}
            </Typography>
          </div>
        </Container>
      </div>
    </Box>
  )
}

export default AddToCart;