import { useContext } from 'react';
import Button from '../../../UI/Button/Button';

import {CartContext} from '../../../Context/cart-triggered-context';

import styles from './CartButton.module.css';


const CartButton = props =>{

    let cartCtx= useContext(CartContext);
    
    function openCart () { 
     cartCtx.setCartStatus(true);   
    };

    return(
        <Button content="Your Cart" styling={styles.CartButtonBox} clickFunc={openCart} ></Button>
    )
}

export default CartButton
