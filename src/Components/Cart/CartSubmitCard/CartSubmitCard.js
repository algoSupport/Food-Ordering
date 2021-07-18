import { useContext } from "react";
import { Dialog, DialogTitle, Typography,useMediaQuery,List,ListItem,ListItemText,Box, DialogContent } from "@material-ui/core";


import { CartInsideContext } from "../../../Context/cart-inside-context";

const CartSubmitCard = (props) => {
  const { isCartSubmit, setIsCartSubmit, CartListArray,setCartListArray, Total, setTotal } =
    useContext(CartInsideContext);


    let totalDisplay=Total;
  let OrderSubmitOutput = CartListArray.map((cartItem) => (
    <ListItem>
    <ListItemText>
      {`You have ordered: ${cartItem.Quantity} ${cartItem.Name}`}
    </ListItemText>
    </ListItem>
  ));

  let isScreenBig = useMediaQuery("(min-width: 900px)");

  let cartSubmitStyles = {};

  if (isScreenBig) {
    cartSubmitStyles = {
      position: "fixed",
      overflow: "auto",
      padding: "30px"

    };
  } else {
    cartSubmitStyles = {
      position: "fixed",
      top: "5%",
      left: "5%",
      width: "80%",
      overflow: "auto",
    };
  }


  return (
    <Dialog
    //  style={ cartSubmitStyles }
      open={isCartSubmit}
      onClose={ () => {
        setIsCartSubmit(false);
        setTotal(0);
        setCartListArray([]);
      } }
    >
        <DialogTitle>Order Details</DialogTitle>
      <DialogContent>

        <List>
        {OrderSubmitOutput}
        <hr/>
        </List>
        
        <Typography variant="h6">
          {"Your total cost is PKR " + totalDisplay}
          <hr/>
        </Typography>

        <Typography variant="overline">
          Your order has been submitted
          <hr/>
        </Typography>

        </DialogContent>
    </Dialog>
  );
};

export default CartSubmitCard;
