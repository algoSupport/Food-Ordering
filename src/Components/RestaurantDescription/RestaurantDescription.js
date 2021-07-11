import {Paper,Typography,Grid} from "@material-ui/core"
import styles from './RestaurantDescription.module.css';


const RestaurantDescription =props => {

    return(
            <Paper cardWidth="30vw" cardColor="#A22A4A" cardFontColor="whitesmoke">
                 <Grid container justify="space-around" alignItems="center">
                 <Typography variant="p" align="right">ようこそ,本物の和菓子へ</Typography>
                 </Grid>
            </Paper>
    )
}

export default RestaurantDescription;