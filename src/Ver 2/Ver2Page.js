import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import RestaurantDescription from "./Components/RestaurantDescription/RestaurantDescription";
import BottomNav from './Components/BottomNav/BottomNav';
import { Container } from "@material-ui/core";


import CartContextProvider from "./Context/cart-triggered-context";
import CartInsideContextProvider from "./Context/cart-inside-context";
import DarkThemeProvider from "./Context/theme-context";

import {Link} from 'react-router-dom';

function Ver2Page() {
  return (
    <CartContextProvider>
      <CartInsideContextProvider>
        <DarkThemeProvider>
          <Container>
            <Cart />
            <Header />
            <RestaurantDescription />
            <Menu />
          </Container>
          <BottomNav />
        </DarkThemeProvider>
      </CartInsideContextProvider>
    </CartContextProvider>
  );
}

export default Ver2Page;
