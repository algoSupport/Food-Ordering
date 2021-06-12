import styles from './CartItem.module.css';

const CartItem = props =>{
    return(
        <li className={styles.MenuItemContainer}>
        <div className={styles.ItemInfoContainer}>
        <h4>{props.Name}</h4>
        <h5>{props.Price}</h5>
        </div>

        <div className={styles.SpaceBox}/>
        
        <h5>{props.Quantity}</h5>
        
        </li>
    )
};

export default CartItem;