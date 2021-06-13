import { useContext } from "react";

import {CartInsideContext} from "../../../../Context/cart-inside-context";

import Button from "../../../../UI/Button/Button";

import styles from "./CartItemAdjust.module.css";

const CartItemAdjust = (props) => {

const { cartMinusFunc } = useContext(CartInsideContext);


  const cartItemAdjustMinus = () => {
    console.log("Cart ItemAdjust Component", "Minus function");
    cartMinusFunc(props.cartItemKey);
  }

  return (
    <div className={styles.CartItemAdjustBox}>
      <Button
        styling={styles.MinusButton}
        content="-"
        clickFunc={cartItemAdjustMinus}
      ></Button>

      <Button styling={styles.PlusButton} content="+"></Button>
    </div>
  );
};

export default CartItemAdjust;
