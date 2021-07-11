import { Toolbar, Typography, Grid } from "@material-ui/core";


import { AppBar } from "@material-ui/core";
import CartButton from "./CartButton/CartButton";
import styles from "./Header.module.css";
import DangoHeader from "./DangoTea.jpg";

const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
      {/* // <div className={styles.HeaderContainer}> */}
      <Grid container justify="space-around" alignItems="center">
          
        <Grid item xs={8}>
          <Typography variant="h4" component="h1" noWrap>
            Amai: Authentic Japanese Sweets
          </Typography>
        </Grid>
        {/* <h1 className={styles.HeaderTitle}>Amai: Authentic Japanese Sweets</h1> */}

        <Grid item xs={2}>
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
