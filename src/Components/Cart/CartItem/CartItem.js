import {useContext} from 'react';

import {CartInsideContext} from "../../../Context/cart-inside-context";

import styles from './CartItem.module.css';

import CartItemAdjust from './CartItemAdjust/CartItemAdjust';


const CartItem = props =>{
        
    return(
        <li className={styles.MenuItemContainer} >
        
        <div className={styles.ItemInfoContainer}>
        <h4>{props.Name}</h4>
        <h5>Price Each: PKR {props.Price}</h5>
        </div>

        <div className={styles.SpaceBox}/>
        
        <h5 className={styles.QuantityBox}>Quantity: {props.Quantity}</h5>

       <CartItemAdjust cartItemKey={props.OrderNumber} /> 
        </li>
    )
};

export default CartItem;