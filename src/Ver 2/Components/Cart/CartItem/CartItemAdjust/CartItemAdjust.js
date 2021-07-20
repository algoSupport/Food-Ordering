import { useContext } from "react";

import { CartInsideContext } from "../../../../Context/cart-inside-context";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { ButtonGroup, IconButton } from "@material-ui/core";

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
      <IconButton
        onClick={cartItemAdjustMinus}
        size="large"
        aria-label="Subtract Item From Cart"
      >
        <RemoveIcon />
      </IconButton>

      <IconButton
        onClick={cartItemAdjustPlus}
        size="large"
        aria-label="Add Item to Cart"
      >
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default CartItemAdjust;
