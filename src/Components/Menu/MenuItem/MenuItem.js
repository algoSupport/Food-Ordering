
import MenuItemAdd from './MenuItemAdd/MenuItemAdd'

import styles from './MenuItem.module.css';
import { Typography,Hidden } from '@material-ui/core';

const MenuItem = props =>{

    return(


        <li className={styles.MenuItemContainer}>
        <div className={styles.ItemInfoContainer}>
        <Typography variant="h6" component="h4">{props.MenuItemTitle}</Typography>
        <Hidden smDown>
        {<Typography variant="caption">{props.MenuItemDesc}</Typography>}
        </Hidden>
        <Typography variant="body1" component="h5">PKR {props.MenuItemPrice} </Typography>
        </div>

        <div className={styles.SpaceBox}/>
        
        <MenuItemAdd MenuItemName={props.MenuItemTitle} MenuItemPrice={props.MenuItemPrice} />
        
        </li>

    )
};

export default MenuItem;