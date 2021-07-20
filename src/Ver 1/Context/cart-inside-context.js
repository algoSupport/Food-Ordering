import React, { useState } from "react";

export const CartInsideContext = React.createContext({
  Total: 0,
  CartListArray: [],
  setCartListArray: () => {},
  CurrentItem: {},
  setCurrentItem: () => {},
  addItemToCart: () => {},
});

const CartInsideContextProvider = (props) => {
  const [totalState, setTotalState] = useState(0);
  const [cartListArrayState, setCartListArrayState] = useState([]);
  const [cartOrderNumberState, setCartOrderNumberState] = useState(0);

  const addItemToCartFunc = (
    currentItemName,
    currentItemPrice,
    currentItemQuantity
  ) => {
    if (currentItemQuantity < 1) {
      return;
    }

    /**/
    let existingCartEntry = cartListArrayState.find( item =>{
      return item.Name == currentItemName
    });
    if(existingCartEntry) {
      let newQuantity=Number(existingCartEntry.Quantity) + (+currentItemQuantity);
      existingCartEntry.Quantity = newQuantity;
    return;
    }

//

    const newCartItem = {
      OrderNumber: cartOrderNumberState,
      Name: currentItemName,
      Price: currentItemPrice,
      Quantity: currentItemQuantity,
    };

    setCartOrderNumberState((prevNumber) => {
      return ++prevNumber;
    });

    setCartListArrayState((prevCartList) => {
      let newCartlist = [...prevCartList, newCartItem];

      updateTotalFunc(newCartlist);

      return newCartlist;
    });
  };


  const removeCartItem = (orderIndex, arrayCopy) => {
    arrayCopy.splice(orderIndex, 1);

    console.log("Array Edited", arrayCopy);

    return arrayCopy;
  };

  const decreaseCartItemQuantity = (itemOrderNumber) => {
    let cartChangeIndex = cartListArrayState.findIndex(
      (cartOrder) => cartOrder.OrderNumber == itemOrderNumber
    );

    setCartListArrayState((prevCartList) => {
      let clonedArray = JSON.parse(JSON.stringify(prevCartList));
      clonedArray[cartChangeIndex].Quantity--;

      if (clonedArray[cartChangeIndex].Quantity < 1) {
        updateTotalFunc(clonedArray);
        return removeCartItem(cartChangeIndex, clonedArray);
      } else {
        updateTotalFunc(clonedArray);
        return clonedArray;
      }
    });
    return;
  };

  const increaseCartItemQuantity = (itemOrderNumber) => {
    let cartChangeIndex = cartListArrayState.findIndex(
      (cartOrder) => cartOrder.OrderNumber == itemOrderNumber
    );

    setCartListArrayState((prevCartList) => {
      let clonedArray = JSON.parse(JSON.stringify(prevCartList));
      clonedArray[cartChangeIndex].Quantity++;

      updateTotalFunc(clonedArray);

      return clonedArray;
    });
    return;
  };

  const updateTotalFunc = (newArray=cartListArrayState) => {
    let newTotal = newArray.reduce((totalSum, item) => {
      return totalSum + item.Price * item.Quantity;
    }, 0);

    setTotalState(newTotal);
    return;
  };

  let printOrder = ()=>{
    cartListArrayState.map((cartItem) => (
    console.log(`You have ordered: ${cartItem.Quantity} ${cartItem.Name}`)
  ));
  console.log("Your total cost is PKR "+totalState)
  console.log("Your order has been submitted")
  setCartListArrayState([]);
  setTotalState(0);
     };

  const cartInsideValues = {
    Total: totalState,
    CartListArray: cartListArrayState,
    setCartListArray: setCartListArrayState,
    addItemToCart: addItemToCartFunc,
    cartMinusFunc: decreaseCartItemQuantity,
    cartPlusFunc: increaseCartItemQuantity,
    updateTotal: updateTotalFunc,
    orderSubmitFunc: printOrder,
  };

  return (
    <CartInsideContext.Provider value={cartInsideValues}>
      {props.children}
    </CartInsideContext.Provider>
  );
};

export default CartInsideContextProvider;
