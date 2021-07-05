import { Typography } from '@material-ui/core';
import {Grid} from '@material-ui/core'

import CartButton from './CartButton/CartButton';
import styles from './Header.module.css';
import DangoHeader from './DangoTea.jpg';


const Header = () => {

    return(
        // <div className={styles.HeaderContainer}>
        <Grid container item={3}>
        <Typography variant="h2" component="h1" noWrap>Black Sheep</Typography>
        {/* <h1 className={styles.HeaderTitle}>Amai: Authentic Japanese Sweets</h1> */}
        <CartButton />
        <img src={DangoHeader} className={styles.HeaderImage} alt="" />
       
        {/* </div> */}
        </Grid>
    )
};

export default Header;