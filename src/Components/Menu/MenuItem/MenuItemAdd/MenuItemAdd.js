import {useContext, useRef} from 'react';

import {CartInsideContext} from '../../../../Context/cart-inside-context';

import styles from './MenuItemAdd.module.css';



const MenuItemAdd = props =>{

    const {addItemToCart} = useContext(CartInsideContext);

    const quantityRef=  useRef();


    const MenuItemAddFunc = (event) => {
        event.preventDefault();

        let inputItemQuantity = quantityRef.current.value;
        // console.log("QuantityRef", quantityRef.current.value);
        
        addItemToCart(inputItemQuantity);
    };
    

    return(
        <form className={styles.MenuAddBox} onSubmit={MenuItemAddFunc}>
            
            <label className={styles.LabelBox} htmlFor={props.MenuItemName}> <strong>Amount: </strong> </label>
            
            <input className={styles.NumberBox} type='number' id={props.MenuItemName} ref={quantityRef} />

            <input className={styles.SubmitButton} type="submit" id={props.MenuItemName} value="ADD" />
            
        </form>
    )
};

export default MenuItemAdd;