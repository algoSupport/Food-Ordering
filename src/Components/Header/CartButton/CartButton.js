import { useContext } from 'react';
// import Button from '../../../UI/Button/Button';
import {Button} from '@material-ui/core';

import {CartContext} from '../../../Context/cart-triggered-context';

import styles from './CartButton.module.css';

 

const CartButton = props =>{

    let cartCtx= useContext(CartContext);
    
    function openCart () { 
     cartCtx.setCartStatus(true);   
    };

    return(
        // <Button content="Your Cart" styling={styles.CartButtonBox} clickFunc={openCart} ></Button>
        <Button variant="contained" color="primary">Your Cart</Button>
    )
}

export default CartButton
