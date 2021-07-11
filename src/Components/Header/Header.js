import { Toolbar, Typography, Grid } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { AppBar } from "@material-ui/core";
import CartButton from "./CartButton/CartButton";
import styles from "./Header.module.css";
import DangoHeader from "./DangoTea.jpg";

const Header = () => {

 let isScreenBig = useMediaQuery('(min-width: 800px)');
 let headerTitle="";
 let headerSize=1;
 let cartButtonSize=1;

  if(isScreenBig) {
    headerTitle="Amai: Authentic Japanese Sweets";
    headerSize=8;
    cartButtonSize=2

  }
  else{
    headerTitle="Amai";
    headerSize=6;
    cartButtonSize=6;
  }

  return (
    <AppBar position="static">
        <Toolbar>
      {/* // <div className={styles.HeaderContainer}> */}
      <Grid container justify="space-around" alignItems="center">
          
        <Grid item xs={headerSize}>
          <Typography variant="h4" component="h1" noWrap>
            {headerTitle}
          </Typography>
        </Grid>
        {/* <h1 className={styles.HeaderTitle}>Amai: Authentic Japanese Sweets</h1> */}

        <Grid item xs={cartButtonSize}>
          <CartButton />
        </Grid>
      </Grid>
      {/* <img src={DangoHeader} className={styles.HeaderImage} alt="" /> */}
      {/* </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
