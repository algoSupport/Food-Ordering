import React, { useContext } from "react";

// import Card from "../../UI/Card/Card";

import {Typography, Card,CardContent, Paper, Grid, Box, Button} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import CartItem from "./CartItem/CartItem";

import Backdrop from "../../UI/Backdrop/Backdrop";

// import Button from '../../UI/Button/Button';

import { CartContext } from "../../Context/cart-triggered-context";
import { CartInsideContext } from "../../Context/cart-inside-context";

import styles from "./Cart.module.css";

const CartCard = () => {
  const { CartListArray, Total,orderSubmitFunc } = useContext(CartInsideContext);

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
    <div className={styles.cartContainer}>
      <Paper container> 
        <CardContent>
      <Grid container justifyContent="space-around" alignItems="center">

      {/* <Card cardWidth="40vw" cardColor="peachpuff"> */}
    <Grid item xs={12} >
        <Typography variant="h4" component="h2" align="center"> Cart</Typography>
    </Grid>

    <Grid item xs={12}>
        {CartList}
    </Grid>


    <Grid item xs={12}>
        <Typography variant="h5" component="h3" align="right">Total: {Total}</Typography>
    </Grid>

    <Grid item xs={4}></Grid>
    <Grid item xs>
        <Button variant="contained" onClick={orderSubmitFunc} color="secondary">Submit Order</Button>
        {/* <Button content="Submit Order" type="submit" styling={styles.OrderSubmitButton} clickFunc={orderSubmitFunc}> </Button> */}
    </Grid>
    


      </Grid>
      </CardContent>

      </Paper>
    </div>
  );
};

const Cart = () => {
  const { cartStatus, setCartStatus } = useContext(CartContext);

  return (
    <>
      {cartStatus && (
        <>
          <Backdrop  btnClick={() => {  setCartStatus(false);  }} />
          <CartCard />
        </>
      )}
    </>
  );
};

export default Cart;
