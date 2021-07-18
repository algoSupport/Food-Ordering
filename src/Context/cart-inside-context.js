import React, { useState } from "react";

export const CartInsideContext = React.createContext({
  Total: 0,
  CartListArray: [],
  setCartListArray: () => {},
  CurrentItem: {},
  setCurrentItem: () => {},
  addItemToCart: () => {},
  isCartSubmit: false,
  setIsCartSubmit: () =>{},
});

const CartInsideContextProvider = (props) => {
  const [totalState, setTotalState] = useState(0);
  const [cartListArrayState, setCartListArrayState] = useState([]);
  const [cartOrderNumberState, setCartOrderNumberState] = useState(0);
  const [cartSubmitState, setCartSubmitState] = useState(false);

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
      if (newQuantity>30) {
        alert("Error. Quantity exceeds 30. Try again");
        return;
      }
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
      if(prevCartList[cartChangeIndex].Quantity >=30) {return prevCartList}
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
    setCartSubmitState(true);
    cartListArrayState.map((cartItem) => (
    console.log(`You have ordered: ${cartItem.Quantity} ${cartItem.Name}`)
  ));
  console.log("Your total cost is PKR "+totalState)
  console.log("Your order has been submitted")
     };

  const cartInsideValues = {
    Total: totalState,
    setTotal: setTotalState,
    CartListArray: cartListArrayState,
    setCartListArray: setCartListArrayState,
    addItemToCart: addItemToCartFunc,
    cartMinusFunc: decreaseCartItemQuantity,
    cartPlusFunc: increaseCartItemQuantity,
    updateTotal: updateTotalFunc,
    orderSubmitFunc: printOrder,
    isCartSubmit: cartSubmitState,
    setIsCartSubmit: setCartSubmitState,
  };

  return (
    <CartInsideContext.Provider value={cartInsideValues}>
      {props.children}
    </CartInsideContext.Provider>
  );
};

export default CartInsideContextProvider;
