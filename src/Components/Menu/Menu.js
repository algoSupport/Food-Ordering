import Card from './../../UI/Card/Card';
import MenuItem from './MenuItem/MenuItem'

import styles from './Menu.module.css'


const Menu = () =>{

    return(
        <Card cardWidth="50vw" cardColor="pink">
            <h2>Menu</h2>
            <ul className={styles.MenuList}>
            
            <MenuItem MenuItemTitle="Dango" 
            MenuItemDesc="a small, sticky, sweet dumpling, commonly skewered on a stick"
            MenuItemPrice="PKR 150"/>

            </ul>


        </Card>
    )
}

export default Menu;