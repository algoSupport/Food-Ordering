import { Paper, Typography, Grid, Hidden, Box } from "@material-ui/core";

const RestaurantDescription = (props) => {
  return (
    <Hidden smDown>
      <Paper>
        <Box borderBottom={1}>
          <Grid container justify="space-around" alignItems="center">
            <Typography variant="body1" align="right">
              ようこそ,本物の和菓子へ
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Hidden>
  );
};
export default RestaurantDescription;
