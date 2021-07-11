import styles from './CartItem.module.css';

import CartItemAdjust from './CartItemAdjust/CartItemAdjust';
import {Card,CardContent, Typography,Grid,Box,useMediaQuery } from '@material-ui/core';

const CartItem = props =>{
        
    let isScreenBig = useMediaQuery('(min-width: 600px)');

    let priceEachString="";
    let quantityString="";
    let totalPriceString="";

    if (isScreenBig){
        priceEachString=`Price Each: PKR ${props.Price}`;
        quantityString=` Quantity: ${props.Quantity}`;
        totalPriceString= `Total Item Price: ${props.Price*props.Quantity}`;
    }
    else{
        priceEachString=`Each:${props.Price}`;
        quantityString=`Qty:${props.Quantity}`;
        totalPriceString= `Item Total:${props.Price*props.Quantity}`;
    }

    return(
        <Box m={1}>
        <Card>
            <CardContent>
            <Grid container alignItems="center" >

        {/* <li className={styles.MenuItemContainer} > */}
        <Grid item xs={7} sm={9}>
        <Typography variant="h6" component="h3">{props.Name}</Typography>
        </Grid>
        <Grid item xs={5} sm={3} display="flex-end" spacing={3}>
        <CartItemAdjust cartItemKey={props.OrderNumber} /> 
        </Grid>

        <Grid item xs={0} sm={2}>
        </Grid>
        <Grid item xs={7} sm={4}>
        <Typography variant="body2" component="h5">{priceEachString}</Typography> 
        </Grid>
        <Grid item xs={5} sm={6}>
        <Typography variant="body2" component="h5" className={styles.QuantityBox}>{quantityString}</Typography>
        </Grid>

        <Grid item xs={12}>
        <Typography variant="subtitle2" component="h4">{totalPriceString}</Typography>
        </Grid>


        {/* <div className={styles.SpaceBox}/> */}
        
 
       
       </Grid>
       </CardContent>
       
       </Card>
       </Box>
        
    )
};

export default CartItem;