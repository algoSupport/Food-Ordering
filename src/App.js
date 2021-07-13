import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import RestaurantDescription from "./Components/RestaurantDescription/RestaurantDescription";
import { Container, Box } from "@material-ui/core";

import CartContextProvider from "./Context/cart-triggered-context";
import CartInsideContextProvider from "./Context/cart-inside-context";
import DarkThemeProvider from "./Context/theme-context";

import "./App.css";

function App() {
  return (
    

        <CartContextProvider>
          <CartInsideContextProvider>
            <DarkThemeProvider>

          <Container>
            <div className="App">
              <Cart />
              <Header />
              <RestaurantDescription />
              <Menu />
            </div>
            </Container>

            </DarkThemeProvider>
          </CartInsideContextProvider>
        </CartContextProvider>

    
  );
}

export default App;
