import React, { useState } from 'react'

export const CartContext = React.createContext(

    {
        CcartTriggered:false,
        CsetCartTriggered: () => {},
    }
);


const CartContextProvider = props =>{

    const [contextTriggered, setCartTriggered] =useState(false);

    const cartValue = {
            CcartTriggered: contextTriggered,
            CsetCartTriggered: setCartTriggered, }            

    return(
    <CartContext.Provider value={cartValue}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;