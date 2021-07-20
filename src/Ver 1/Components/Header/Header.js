
import CartButton from './CartButton/CartButton';
import styles from './Header.module.css';


const Header = () => {

    return(
        <div className={styles.HeaderContainer}>
        <h1 className={styles.HeaderTitle}>Amai: Authentic Japanese Sweets</h1>
        <CartButton />
        </div>
    )
};

export default Header;