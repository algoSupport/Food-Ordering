import {Paper,Typography,Grid} from "@material-ui/core"
import styles from './RestaurantDescription.module.css';

import {useMediaQuery} from "@material-ui/core/"


const RestaurantDescription =props => {

    let isScreenBig =useMediaQuery('(min-width: 780px)');

    return(
        <>
        {/* <Paper cardWidth="30vw" cardColor="#A22A4A" cardFontColor="whitesmoke"> */
        isScreenBig &&
            <Paper>
                 <Grid container justify="space-around" alignItems="center">
                 <Typography variant="body1" align="right">ようこそ,本物の和菓子へ</Typography>
                 </Grid>
            </Paper>
        }
        </>
    )
}

export default RestaurantDescription;