import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import RestaurantDescription from "./Components/RestaurantDescription/RestaurantDescription";
import { Container, Box } from "@material-ui/core";

import CartContextProvider from "./Context/cart-triggered-context";
import CartInsideContextProvider from "./Context/cart-inside-context";

import "./App.css";

function App() {
  return (
    

        <CartContextProvider>
          <CartInsideContextProvider>
          <Container>

            <div className="App">
              <Cart />
              <Header />
              <RestaurantDescription />
              <Menu />
            </div>
            </Container>
    
          </CartInsideContextProvider>
        </CartContextProvider>

    
  );
}

export default App;
