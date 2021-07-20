import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import RestaurantDescription from "./Components/RestaurantDescription/RestaurantDescription";
import BottomNav from './Components/BottomNav/BottomNav';

import CartContextProvider from "./Context/cart-triggered-context";
import CartInsideContextProvider from "./Context/cart-inside-context";

import "./Ver1.css";

function Ver1Page() {
  return (
    <CartContextProvider>
      <CartInsideContextProvider>
        <div className="Ver1Class">
          <Cart />

          <Header />
          <RestaurantDescription />
          <Menu />
          <BottomNav/>
        </div>
      </CartInsideContextProvider>
    </CartContextProvider>
  );
}

export default Ver1Page;
