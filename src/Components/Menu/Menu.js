import {
  Typography,
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
} from "@material-ui/core";
import MenuItem from "./MenuItem/MenuItem";

import { CartInsideContext } from "../../Context/cart-inside-context";
import { useEffect, useState, useContext } from "react";

// import dangoPicture from "./menuItemPics/192.png";

const Menu = () => {
  const [menuListArray, setMenuListArray] = useState([]);
  const { isError, setIsError } = useContext(CartInsideContext);

  useEffect(() => {
    setMenuListArray([
      {
        MenuItemTitle: "Dango",
        MenuItemDesc:
          "a small, sticky, sweet dumpling, commonly skewered on a stick",
        MenuItemPrice: "30",
        PicAlt: "DangoPicture",
        PicSrc: "192.png",
      },

      {
        MenuItemTitle: "Konpeito",
        MenuItemDesc: "A crystal sugar candy",
        MenuItemPrice: "10",
        PicAlt: "DangoPicture",
        PicSrc: "192.png",
      },

      {
        MenuItemTitle: "Taiyaki",
        MenuItemDesc: "Fish shaped cake with a sweet filling",
        MenuItemPrice: "60",
        PicAlt: "DangoPicture",
        PicSrc: "192.png",
      },
    ]);
  }, []);

  let readyArray = menuListArray.map((menuItem) => (
    <Box p={1} key={menuItem.MenuItemTitle}>
      <MenuItem
        MenuItemTitle={menuItem.MenuItemTitle}
        MenuItemDesc={menuItem.MenuItemDesc}
        MenuItemPrice={menuItem.MenuItemPrice}
        PicAltProp={menuItem.PicAlt}
        PicSrcProp={menuItem.PicSrc}
      />
      <hr />
    </Box>
  ));

  return (
    <Paper>
      <Box width="70%" p={2} mx="10%">
        <Typography variant="h4" component="h2" align="center">
          Menu
        </Typography>

        <List>{readyArray}</List>
        <div>
          Favicon made by{" "}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <Dialog
          open={isError}
          onClose={() => {
            setIsError(false);
          }}
        >
          <DialogTitle>Error</DialogTitle>
          <DialogContent>Amount of items in cart will exceed 30.</DialogContent>
        </Dialog>
      </Box>
    </Paper>
  );
};

export default Menu;
