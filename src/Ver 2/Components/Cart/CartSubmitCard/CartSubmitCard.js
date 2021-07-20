import { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  List,
  ListItem,
  ListItemText,
  DialogContent,
} from "@material-ui/core";

import { CartInsideContext } from "../../../Context/cart-inside-context";

const CartSubmitCard = (props) => {
  const {
    isCartSubmit,
    setIsCartSubmit,
    CartListArray,
    setCartListArray,
    Total,
    setTotal,
  } = useContext(CartInsideContext);

  let totalDisplay = Total;
  let OrderSubmitOutput = CartListArray.map((cartItem) => (
    <ListItem>
      <ListItemText>
        {`You have ordered: ${cartItem.Quantity} ${cartItem.Name}`}
      </ListItemText>
    </ListItem>
  ));

  return (
    <Dialog
      //  style={ cartSubmitStyles }
      open={isCartSubmit}
      onClose={() => {
        setIsCartSubmit(false);
        setTotal(0);
        setCartListArray([]);
      }}
    >
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <List>
          {OrderSubmitOutput}
          <hr />
        </List>

        <Typography variant="h6">
          {"Your total cost is PKR " + totalDisplay}
          <hr />
        </Typography>

        <Typography variant="overline">
          Your order has been submitted
          <hr />
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CartSubmitCard;
