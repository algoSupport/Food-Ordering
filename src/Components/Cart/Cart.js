import React, { useContext } from "react";

import Card from "../../UI/Card/Card";
import CartItem from "./CartItem/CartItem";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { CartContext } from "../../Context/cart-triggered-context";
import { CartInsideContext } from "../../Context/cart-inside-context";

import styles from "./Cart.module.css";

const CartCard = () => {
  const { CartListArray, Total } = useContext(CartInsideContext);

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
      <Card cardWidth="40vw" cardColor="peachpuff">
        <h2>Cart</h2>

        <button
          onClick={() =>
            CartListArray.forEach((item) => console.log(item.Name,item.Quantity))
          }
        >
          PRESS FOR CART LIST QUANTITIES
        </button>
        {CartList}

        <h3>Total: {Total}</h3>
      </Card>
    </div>
  );
};

const Cart = () => {
  const { cartStatus, setCartStatus } = useContext(CartContext);

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
