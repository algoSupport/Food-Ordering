import CardNew from "./../../UI/Card/Card";
import {Grid,Typography,Container, Box,Paper,Card} from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    <Box m={1} p={1} key={menuItem.MenuItemTitle} >
  <MenuItem 
   MenuItemTitle={menuItem.MenuItemTitle}
  MenuItemDesc={menuItem.MenuItemDesc}
  MenuItemPrice={menuItem.MenuItemPrice} />
   <hr/>
  </Box>  ));


   


  return (
    <Paper>
          <Box width="70%"  m={0.5} p={2} mx="10%">

      <Typography variant="h4" component="h2" align="center">Menu</Typography>

      <ul className={styles.MenuList}>
        {readyArray}
      </ul>

      </Box>
    </Paper>
  
  )
};

export default Menu;
