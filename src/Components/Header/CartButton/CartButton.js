import { useState,useContext } from 'react';
import Button from '../../../UI/Button/Button';

import CartContext from '../../../Context/cart-context';

import styles from './CartButton.module.css';

const CartButton = props =>{

    const [cartTriggered, setCartTriggered] =useState(false);

    let cartCtx= useContext(CartContext);

    
    function openCart () { 
     console.log("Button",cartTriggered);
     setCartTriggered(true);
     cartCtx.CsetCartTriggered(true);   
    };

    return(
        <Button content="Your Cart" styling={styles.CartButtonBox} clickFunc={openCart} ></Button>
    )
}

export default CartButton
