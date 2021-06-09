import React, {useContext} from 'react'

import Card from "../../UI/Card/Card";
import CartItem from './CartItem/CartItem';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {CartContext} from '../../Context/cart-triggered-context'

import styles from './Cart.module.css';


const CartCard = () =>{ 

    const {setCartStatus} = useContext(CartContext);

    return(            
        <div className={styles.cartContainer}>

        <Card cardWidth="40vw" cardColor="peachpuff" btnClick={()=>{setCartStatus(false)}} >

        <h2>Cart</h2>
        <CartItem/>
        
        </Card>

        </div> 
    )
}

const Cart = () =>{
    const {cartStatus} = useContext(CartContext);

return(
    <>
    { cartStatus &&
    <>
    <Backdrop/>
    <CartCard/>)
    </>
    }
    </>
)};

export default Cart;