import { useContext } from "react";

import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { CartContext } from "../../../Context/cart-triggered-context";

const CartButton = (props) => {
  let cartCtx = useContext(CartContext);

  function openCart() {
    cartCtx.setCartStatus(true);
  }

  return (
    // <Button content="Your Cart" styling={styles.CartButtonBox} clickFunc={openCart} ></Button>
    <Button
      variant="contained"
      color="secondary"
      onClick={openCart}
      size="large"
      startIcon={<ShoppingCartIcon />}
    >
      Your Cart
    </Button>
  );
};

export default CartButton;
