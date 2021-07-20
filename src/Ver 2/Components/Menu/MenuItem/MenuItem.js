import MenuItemAdd from "./MenuItemAdd/MenuItemAdd";

import {
  Typography,
  Hidden,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

// import dangoPicture from "../menuItemPics/192.png";

const MenuItem = (props) => {
  return (
    <ListItem>
      {/* <ListItemAvatar>
                {/* <Avatar alt={props.PicAltProp} src={"./192.png"} /> */}
      {/* </ListItemAvatar> */}
      <Grid container>
        <Grid item xs={7} sm={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" component="h4">
                {props.MenuItemTitle}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Hidden smDown>
                <Typography variant="caption">{props.MenuItemDesc}</Typography>
              </Hidden>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" component="h5">
                PKR {props.MenuItemPrice}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} sm={3}>
          <MenuItemAdd
            MenuItemName={props.MenuItemTitle}
            MenuItemPrice={props.MenuItemPrice}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default MenuItem;
