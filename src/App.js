import { useContext } from 'react';


import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import RestaurantDescription from './Components/RestaurantDescription/RestaurantDescription';

import CartContextProvider  from './Context/cart-context';

import './App.css';


function App() {

  return (

    <CartContextProvider>
    <div className="App">
            <Cart/>

            <Header/>
            <RestaurantDescription/>
            <Menu/>
    </div>
    </CartContextProvider>
      );
}

export default App;