import Card from "./../../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

const Menu = () => {

  const [menuListArray, setMenuListArray] = useState([]);

  useEffect(()=>{

    setMenuListArray([
      {
        MenuItemTitle:"Dango",
        MenuItemDesc:"a small, sticky, sweet dumpling, commonly skewered on a stick",
        MenuItemPrice:"30",
      },
  
      {
        MenuItemTitle:"Kompeito",
        MenuItemDesc:"A crystal sugar candy",
        MenuItemPrice:"10",
      },

      {
        MenuItemTitle:"Taiyaki",
        MenuItemDesc:"Fish shaped cake with a sweet filling",
        MenuItemPrice:"60",
      },
    ]);
  },[])

  let readyArray=menuListArray.map( menuItem=> (
  <MenuItem 
  key={Math.random()}
  MenuItemTitle={menuItem.MenuItemTitle}
  MenuItemDesc={menuItem.MenuItemDesc}
  MenuItemPrice={menuItem.MenuItemPrice} />  ));
   


  return (
    <Card cardWidth="50vw" cardColor="pink">
      <h2>Menu</h2>
      <ul className={styles.MenuList}>
        {readyArray}
      </ul>
    </Card>
  )
};

export default Menu;
