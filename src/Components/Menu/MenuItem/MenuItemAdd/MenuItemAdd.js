import { useContext, useRef } from "react";

import { CartInsideContext } from "../../../../Context/cart-inside-context";

import { TextField, Button, Grid } from "@material-ui/core";

const MenuItemAdd = (props) => {
  const { addItemToCart } = useContext(CartInsideContext);

  const quantityRef = useRef();

  const MenuItemAddFunc = (event) => {
    event.preventDefault();

    let inputItemQuantity = quantityRef.current.value;

    addItemToCart(props.MenuItemName, props.MenuItemPrice, inputItemQuantity);
    quantityRef.current.value = "";
  };

  return (
    <form onSubmit={MenuItemAddFunc}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id={"quantity" + props.MenuItemName}
            type="number"
            InputProps={{ inputProps: { min: 1, max: 30 } }}
            label="Amount:"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            inputRef={quantityRef}
            // margin='dense'
            fullWidth={true}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            id={"button" + props.MenuItemName}
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            fullWidth={true}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MenuItemAdd;
