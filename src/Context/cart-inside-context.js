import React, {useContext,useState} from 'react'

export const CartInsideContext = React.createContext(
    {
        Total: 0,
        CartListArray: [],
        setCartListArray: () =>{},
        CurrentItem: {},
        setCurrentItem: ()=>{},
        addItemToCart: () =>{},
    }
);

const CartInsideContextProvider = props=> {

    const [totalState,setTotalState] = useState(0);
    const [currentItemState, setCurrentItemState]= useState({});
    const [cartListArrayState, setCartListArrayState]= useState([]);
    

    const addItemToCartFunc =(inputItemQuantity)=> {

        if(inputItemQuantity<1){
            return;
        }

        const newCartItem ={
            currentItemName : props.MenuItemName,
            currentItemPrice: props.MenuItemPrice,
            currentItemQuantity : inputItemQuantity,
        };

        setCurrentItemState(newCartItem);

        setCartListArrayState((prevCartList)=>{
           return [{newCartItem},...prevCartList];
        });
    };


    const cartInsideValues={
        Total: totalState,
        CartListArray: cartListArrayState,
        setCartListArray: setCartListArrayState,
        CurrentItem: currentItemState,
        setCurrentItem: setCurrentItemState,
        addItemToCart: addItemToCartFunc,
                 }

    return(
        <CartInsideContext.Provider value={cartInsideValues}>
            {props.children}
        </CartInsideContext.Provider>
          )
};

export default CartInsideContextProvider;