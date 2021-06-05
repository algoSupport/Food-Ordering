import MenuItemAdd from './MenuItemAdd/MenuItemAdd'

import styles from './MenuItem.module.css'

const MenuItem = props =>{

    return(
        
        <li className={styles.MenuItemContainer}>
        <div className={styles.ItemInfoContainer}>
        <h4>{props.MenuItemTitle}</h4>
        <em>{props.MenuItemDesc}</em>
        <h5>{props.MenuItemPrice}</h5>
        </div>

        <div className={styles.SpaceBox}/>
        
        <MenuItemAdd/>
        
        </li>
    )
};

export default MenuItem;