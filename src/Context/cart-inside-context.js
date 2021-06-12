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
    

    const addItemToCartFunc =(currentItemName,currentItemPrice,currentItemQuantity) => {

        if(currentItemQuantity<1){
            return;
        }

        const newCartItem ={
            Name: currentItemName,
            Price: currentItemPrice,
            Quantity: currentItemQuantity,
        };

        setCurrentItemState(newCartItem);
        // console.log("Current Item State",currentItemState);

        setCartListArrayState((prevCartList)=>{
        //    console.log(...prevCartList);
            return [...prevCartList,newCartItem];
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