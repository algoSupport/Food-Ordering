import styles from './CartItem.module.css';

import CartItemAdjust from './CartItemAdjust/CartItemAdjust';


const CartItem = props =>{
        
    return(
        <li className={styles.MenuItemContainer} >
        
        <div className={styles.ItemInfoContainer}>
        <h3>{props.Name}</h3>
        <h4>Price Each: PKR {props.Price}</h4>
        <h5>Total Item Price: {props.Price*props.Quantity} </h5>
        </div>

        <div className={styles.SpaceBox}/>
        
        <h5 className={styles.QuantityBox}>Quantity: {props.Quantity}</h5>

       <CartItemAdjust cartItemKey={props.OrderNumber} /> 
        </li>
    )
};

export default CartItem;