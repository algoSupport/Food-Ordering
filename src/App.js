import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import RestaurantDescription from "./Components/RestaurantDescription/RestaurantDescription";
import { Container } from "@material-ui/core";

import CartContextProvider from "./Context/cart-triggered-context";
import CartInsideContextProvider from "./Context/cart-inside-context";
import DarkThemeProvider from "./Context/theme-context";

function App() {
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
        </DarkThemeProvider>
      </CartInsideContextProvider>
    </CartContextProvider>
  );
}

export default App;
