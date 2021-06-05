import Card from "./../../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

const Menu = () => {
  let i = 0;

  const [menuListArray, setMenuListArray] = useState([]);

  useEffect(()=>{

    setMenuListArray([
      <MenuItem
        MenuItemTitle="Dango"
        MenuItemDesc="a small, sticky, sweet dumpling, commonly skewered on a stick"
        MenuItemPrice="PKR 150"
      />,
  
      <MenuItem
        MenuItemTitle="Kompeito"
        MenuItemDesc="A crystal sugar candy"
        MenuItemPrice="PKR 20"
      />,
    ]);
  },[])


  return (
    <Card cardWidth="50vw" cardColor="pink">
      <h2>Menu</h2>
      <ul className={styles.MenuList}>
        {menuListArray}
      </ul>
    </Card>
  )
};

export default Menu;
