import {
  Toolbar,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  Box,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { AppBar } from "@material-ui/core";
import CartButton from "./CartButton/CartButton";

import { themeContext } from "../../Context/theme-context";
import { useContext } from "react";

const Header = () => {
  const { isDark, setIsDark } = useContext(themeContext);

  let isScreenBig = useMediaQuery("(min-width: 800px)");
  let headerTitle = "";

  if (isScreenBig) {
    headerTitle = "Amai: Authentic Japanese Sweets";
  } else {
    headerTitle = "Amai";
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {/* // <div className={styles.HeaderContainer}> */}
        <Grid container alignItems="center">
          <Grid item xs={4} sm={7}>
            <Typography variant="h4" component="h1" noWrap>
              {headerTitle}
            </Typography>
          </Grid>

          
          <Grid item xs={5} sm={4}>
          <Box mr={1}>
            <CartButton />
            </Box>
          </Grid>
          

          <Grid item xs={3} sm={1}>
            <FormControlLabel
              control={
                <Switch
                  color="default"
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                />
              }
              label={isDark ? "Dark Mode" : "Light Mode"}
            />
          </Grid>
        </Grid>
        {/* <img src={DangoHeader} className={styles.HeaderImage} alt="" /> */}
        {/* </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
