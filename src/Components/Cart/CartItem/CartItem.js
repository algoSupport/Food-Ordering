import styles from './CartItem.module.css';

import CartItemAdjust from './CartItemAdjust/CartItemAdjust';
import {Card,CardContent, Typography,Grid,Box } from '@material-ui/core';

const CartItem = props =>{
        
    return(
        <Box m={1}>
        <Card>
            <CardContent>
            <Grid container justifyContent="space-around" alignItems="center" spacing={1}>

        {/* <li className={styles.MenuItemContainer} > */}
        
        <div className={styles.ItemInfoContainer}>
        <Typography variant="h6" component="h3">{props.Name}</Typography>
        <Typography variant="h7" component="h4">Price Each: PKR {props.Price}</Typography>
        <Typography variant="h7" component="h5">Total Item Price: {props.Price*props.Quantity} </Typography>
        </div>

        <div className={styles.SpaceBox}/>
        
        <Typography variant="h7" component="h5" className={styles.QuantityBox}> Quantity: {props.Quantity} </Typography>

       <CartItemAdjust cartItemKey={props.OrderNumber} /> 
       
       </Grid>
       </CardContent>
       
       </Card>
       </Box>
        
    )
};

export default CartItem;