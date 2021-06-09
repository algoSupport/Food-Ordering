import React, {useContext} from 'react'

import Card from "../../UI/Card/Card";
import CartItem from './CartItem/CartItem';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {CartContext} from '../../Context/cart-context'

import styles from './Cart.module.css';


const CartCard = () =>{
    const {CcartTriggered, CsetCartTriggered} = useContext(CartContext);

    React.useEffect(() => {
        console.log("Check", CcartTriggered)
         }, [CcartTriggered]);
            

    return(
            
        <div className={styles.cartContainer}>

        <Card cardWidth="40vw" cardColor="peachpuff">

        <h2>Cart</h2>
        <CartItem/>
        

        </Card>

        </div> 
    )
}

const Cart = () =>{
    const {CcartTriggered} = useContext(CartContext);

return(
    <>
    { CcartTriggered &&
    <>
    <Backdrop/>
    <CartCard/>)
    </>
    }
    </>
)};

export default Cart;