import Button from '../../../UI/Button/Button';

import styles from './CartButton.module.css';

const CartButton = props =>{

    function openCart (){
     alert("Works!");   
    };

    return(
        <Button content="Your Cart" styling={styles.CartButtonBox} clickFunc={openCart}></Button>
    )
}

export default CartButton
