import { useState,useContext } from 'react';


import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import RestaurantDescription from './Components/RestaurantDescription/RestaurantDescription';

import CartContextProvider, {CartContext}  from './Context/cart-context';

import './App.css';


function App() {

  const {CcartTriggered} = useContext(CartContext);


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
