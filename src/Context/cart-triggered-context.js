import React, { useState } from "react";

export const CartContext = React.createContext({
  cartStatus: false,
  setCartStatus: () => {},
});

const CartContextProvider = (props) => {
  const [cartTriggered, setCartTriggered] = useState(false);

  const cartValue = {
    cartStatus: cartTriggered,
    setCartStatus: setCartTriggered,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
