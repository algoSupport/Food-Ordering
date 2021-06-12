import React, {useContext} from 'react'

import Card from "../../UI/Card/Card";
import CartItem from './CartItem/CartItem';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {CartContext} from '../../Context/cart-triggered-context'
import {CartInsideContext} from '../../Context/cart-inside-context'

import styles from './Cart.module.css';


const CartCard = () =>{ 

    const {CartListArray,Total,CurrentItem} = useContext(CartInsideContext);

    return(            
        <div className={styles.cartContainer}>

        <Card cardWidth="40vw" cardColor="peachpuff" >

        <h2>Cart</h2>
        <CartItem/>
        {/* {CartListArray} */}
        
        Current Item Name: {CurrentItem.currentItemName}<br/>
        Current Item Quantity :{CurrentItem.currentItemQuantity}<br/>
        Current Item Price: {CurrentItem.currentItemPrice}
        
        <p>Total: {Total}</p>
        
        </Card>

        </div> 
    )
}

const Cart = () =>{
    const {cartStatus} = useContext(CartContext);
    const {setCartStatus} = useContext(CartContext);

return(
    <>
    { cartStatus &&
    <>
    <Backdrop btnClick={()=>{setCartStatus(false)}}/>
    <CartCard/>)
    </>
    }
    </>
)};

export default Cart;