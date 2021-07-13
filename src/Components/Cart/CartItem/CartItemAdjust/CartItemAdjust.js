import { useContext } from "react";

import { CartInsideContext } from "../../../../Context/cart-inside-context";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import Button from "../../../../UI/Button/Button";
import { Typography, Button,ButtonGroup,IconButton } from "@material-ui/core";

import styles from "./CartItemAdjust.module.css";

const CartItemAdjust = (props) => {
  const { cartMinusFunc, cartPlusFunc } = useContext(CartInsideContext);

  const cartItemAdjustMinus = () => {
    cartMinusFunc(props.cartItemKey);
    return;
  };

  const cartItemAdjustPlus = () => {
    cartPlusFunc(props.cartItemKey);
    return;
  };

  return (
    <ButtonGroup color="primary">
     {/* <div className={styles.CartItemAdjustBox}> */}
      {/* <Button
        styling={styles.MinusButton}
        content="-"
        clickFunc={cartItemAdjustMinus}
      ></Button>

      <Button styling={styles.PlusButton} content="+" clickFunc={cartItemAdjustPlus}></Button> */}
      <IconButton
        onClick={cartItemAdjustMinus}
        size="large"
        aria-label="Subtract Item From Cart"
      >
       <RemoveIcon/>
      </IconButton>

      <IconButton
        
        onClick={cartItemAdjustPlus}
        size="large"
        aria-label="Add Item to Cart"
      >
        <AddIcon/>
      </IconButton>
      </ButtonGroup> 
  );
};

export default CartItemAdjust;
