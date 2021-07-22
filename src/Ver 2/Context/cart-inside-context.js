import React, { useState } from "react";

export const CartInsideContext = React.createContext({
  Total: 0,
  CartListArray: [],
  setCartListArray: () => {},
  CurrentItem: {},
  setCurrentItem: () => {},
  addItemToCart: () => {},
  isError: false,
  isCartSubmit: false,
  setIsCartSubmit: () => {},
  setIsError: () => {},
});

const CartInsideContextProvider = (props) => {
  const [totalState, setTotalState] = useState(0);
  const [cartListArrayState, setCartListArrayState] = useState([]);
  const [cartOrderNumberState, setCartOrderNumberState] = useState(0);
  const [cartSubmitState, setCartSubmitState] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const addItemToCartFunc = (
    currentItemName,
    currentItemPrice,
    currentItemQuantity
  ) => {
    if (currentItemQuantity < 1) {
      return;
    }

    /**/
    let existingCartEntry = cartListArrayState.find((item) => {
      return item.Name === currentItemName;
    });
    if (existingCartEntry) {
      let newQuantity =
        Number(existingCartEntry.Quantity) + +currentItemQuantity;
      if (newQuantity > 30) {
        setErrorState(true);
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
      (cartOrder) => cartOrder.OrderNumber === itemOrderNumber
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
      (cartOrder) => cartOrder.OrderNumber === itemOrderNumber
    );

    setCartListArrayState((prevCartList) => {
      if (prevCartList[cartChangeIndex].Quantity >= 30) {
        return prevCartList;
      }
      let clonedArray = JSON.parse(JSON.stringify(prevCartList));
      clonedArray[cartChangeIndex].Quantity++;

      updateTotalFunc(clonedArray);

      return clonedArray;
    });
    return;
  };

  const updateTotalFunc = (newArray = cartListArrayState) => {
    let newTotal = newArray.reduce((totalSum, item) => {
      return totalSum + item.Price * item.Quantity;
    }, 0);

    setTotalState(newTotal);
    return;
  };
  
  async function sendOrder(orderObject) {
    
    var currentdate = new Date(); 
    var datetime = [("Order Placed: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds())];

    let newOrderObj =datetime.concat([orderObject]);

    const OrderResponseThing = await  fetch("https://foodorderapp-cf013-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json", {
      method: 'POST',
      body: JSON.stringify(newOrderObj),
      headers: {
        'Content-Type': 'application/json'
      },
      });
    };

  let printOrder = () => {
    if (!totalState) return;
    setCartSubmitState(true);
    cartListArrayState.map((cartItem) =>
      console.log(`You have ordered: ${cartItem.Quantity} ${cartItem.Name}`)
    );
    console.log("Your total cost is PKR " + totalState);
    console.log("Your order has been submitted");


    sendOrder(cartListArrayState);
    
    //Cart Cleared in CartSubmitCard onClose

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
    isError: errorState,
    setIsError: setErrorState,
  };

  return (
    <CartInsideContext.Provider value={cartInsideValues}>
      {props.children}
    </CartInsideContext.Provider>
  );
};

export default CartInsideContextProvider;
