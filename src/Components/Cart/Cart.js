import React, { useContext } from "react";

// import Card from "../../UI/Card/Card";

import {
  Typography,
  CardContent,
  Paper,
  Grid,
  Button,
  Modal,
  useMediaQuery,
} from "@material-ui/core";

import CartItem from "./CartItem/CartItem";

// import Button from '../../UI/Button/Button';

import { CartContext } from "../../Context/cart-triggered-context";
import { CartInsideContext } from "../../Context/cart-inside-context";

const CartCard = () => {
  const { CartListArray, Total, orderSubmitFunc } =
    useContext(CartInsideContext);

  let CartList = CartListArray.map((cartItem) => (
    <CartItem
      OrderNumber={cartItem.OrderNumber}
      key={cartItem.OrderNumber}
      Name={cartItem.Name}
      Quantity={cartItem.Quantity}
      Price={cartItem.Price}
    />
  ));

  return (
    // <div className={styles.cartContainer}>
    <Paper container>
      <CardContent>
        <Grid container justifyContent="space-around" alignItems="center">
          {/* <Card cardWidth="40vw" cardColor="peachpuff"> */}
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center">
              Cart
            </Typography>
          </Grid>

          <Grid item xs={12}>
            {CartList}
          </Grid>

          <Grid item xs={3} sm={12} align="center">
            <Typography variant="h5" component="h3" >
              Total: {Total}
            </Typography>
          </Grid>

          {/* <Grid item xs={4}></Grid> */}
          <Grid item xs={9} sm={12} align="center">
            <Button
              variant="contained"
              onClick={orderSubmitFunc}
              color="secondary"
              size="large"
            >
              Submit Order
            </Button>
            {/* <Button content="Submit Order" type="submit" styling={styles.OrderSubmitButton} clickFunc={orderSubmitFunc}> </Button> */}
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
    // </div>
  );
};

const Cart = () => {
  
  let isScreenBig = useMediaQuery('(min-width: 800px)');

  let cartStyles= {};

  if (isScreenBig){
    cartStyles = {
      position: "fixed",
      top: "2%",
      left: "25%",
      width: "50%",
      overflow: "scroll"
    };}
    else{
      cartStyles ={
        position: "fixed",
        top: "2%",
        left: "10%",
        width: "80%",
        overflow: "scroll"
      }
    }

  const { cartStatus, setCartStatus } = useContext(CartContext);

  return (
    <>
      {cartStatus && (
        <Modal
          style={cartStyles}
          open={() => {
            setCartStatus(true);
          }}
          onClose={() => {
            setCartStatus(false);
          }}
                  >
          <CartCard />
        </Modal>
      )}
    </>
  );
};

export default Cart;
