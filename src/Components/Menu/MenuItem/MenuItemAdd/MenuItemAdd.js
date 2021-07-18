import { useContext, useRef } from "react";

import { CartInsideContext } from "../../../../Context/cart-inside-context";

import { TextField,Button } from "@material-ui/core";

import styles from "./MenuItemAdd.module.css";

const MenuItemAdd = (props) => {
  const { addItemToCart } = useContext(CartInsideContext);

  const quantityRef = useRef();

  const MenuItemAddFunc = (event) => {
    event.preventDefault();

    let inputItemQuantity = quantityRef.current.value;
    // console.log("QuantityRef", quantityRef.current.value);

    addItemToCart(props.MenuItemName, props.MenuItemPrice, inputItemQuantity);
    quantityRef.current.value = "";
  };

  return (
    // <form className={styles.MenuAddBox} onSubmit={MenuItemAddFunc}>
       <form onSubmit={MenuItemAddFunc}>
      {/* <label className={styles.LabelBox} htmlFor={props.MenuItemName}>
        {" "}
        <strong>Amount: </strong>{" "}
      </label> */}

      <TextField
        id={"quantity"+props.MenuItemName}
        type="number"
        InputProps= {{inputProps: {min:1, max:30} }}
        label="Amount: "
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        inputRef={quantityRef}
      />
      <Button id={"button"+props.MenuItemName} variant="contained" color="primary" type="submit" size="large">
        ADD
        </Button>  
    </form>
  );
};

export default MenuItemAdd;
