import React, { useContext } from "react";

import Card from "../../UI/Card/Card";
import CartItem from "./CartItem/CartItem";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { CartContext } from "../../Context/cart-triggered-context";
import { CartInsideContext } from "../../Context/cart-inside-context";

import styles from "./Cart.module.css";

const CartCard = () => {
  const { CartListArray, Total, CurrentItem } = useContext(CartInsideContext);


  

    let CartList=CartListArray.map((cartItem)=>(
        <CartItem
          Name={cartItem.Name}
          Quantity={cartItem.Quantity}
          Price={cartItem.Price}
        />
    ));

  return (
    <div className={styles.cartContainer}>
      <Card cardWidth="40vw" cardColor="peachpuff">
        <h2>Cart</h2>

        {/* <CartItem
          Name={CurrentItem.Name}
          Quantity={CurrentItem.Quantity}
          Price={CurrentItem.Price}
        /> */}
    {CartList}
<button onClick={()=>{console.log("Current Item:",CurrentItem)}}>PRESS FOR CURRENT ITEM</button>
<button onClick={()=>{console.log("Cart List Array:",CartListArray)}}>Press for Cart list Array</button> 
        {Total}

        
      </Card>
    </div>
  );
};

const Cart = () => {
  const { cartStatus } = useContext(CartContext);
  const { setCartStatus } = useContext(CartContext);

  return (
    <>
      {cartStatus && (
        <>
          <Backdrop
            btnClick={() => {
              setCartStatus(false);
            }}
          />
          <CartCard />)
        </>
      )}
    </>
  );
};

export default Cart;
