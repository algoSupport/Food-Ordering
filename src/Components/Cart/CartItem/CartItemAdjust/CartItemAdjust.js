import { useContext } from "react";

import CartInsideContext from "../../../../Context/cart-inside-context";

import Button from "../../../../UI/Button/Button";

import styles from "./CartItemAdjust.module.css";

const CartItemAdjust = (props) => {
  const { CartListArray, setCartListArray } = useContext(CartInsideContext);

  const cartDecreaseItemQuantity = () => {
      
    let cartChangeIndex = CartListArray.findIndex(
      (cartOrder) => cartOrder.OrderNumber == props.cartItemKey
    );

    setCartListArray((prevCartList) => {
      let updateItemSelect = prevCartList[cartChangeIndex];

      let updatedCartItem = {
        OrderNumber: updateItemSelect.OrderNumber,
        Name: updateItemSelect.Name,
        Price: updateItemSelect.Price,
        Quantity: --updateItemSelect.Quantity,
      };

      let newListArray = prevCartList;
      newListArray[cartChangeIndex] = updatedCartItem;
      return newListArray;
    });
  };

  return (
    <div className={styles.CartItemAdjustBox}>
      <Button
        styling={styles.MinusButton}
        content="-"
        clickFunc={cartDecreaseItemQuantity}
      ></Button>
      <Button styling={styles.PlusButton} content="+"></Button>
    </div>
  );
};

export default CartItemAdjust;
