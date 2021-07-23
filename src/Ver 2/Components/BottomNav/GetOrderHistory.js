import { Button, Dialog, Typography, List, ListItem, ListItemText } from "@material-ui/core";


import { useState, useMemo, useEffect } from "react";


const OrderHistory = (props) => {
  const [orderDisplayState, setOrderDisplayState] = useState(false);
  const [ordersArray, setOrdersArray] = useState([]);


  function historyButtonPress() {
    getOrderHistory();
    setOrderDisplayState(true);
  }

  async function getOrderHistory() {
    let orderHistoryObjResponse = await fetch(
      "https://foodorderapp-cf013-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json"
    );
    let orderHistoryObj = await orderHistoryObjResponse.json();

    let OrderHistoryArray = [];

    for (const key in orderHistoryObj) {
      orderHistoryObj[key].forEach((order) => {
        if (!Array.isArray(order)) {
          OrderHistoryArray.push(<hr/>)
          OrderHistoryArray.push(order);

        } else {

          order.forEach((unit) => {
            for (const key in unit) {
              if(key.includes('Name')) {OrderHistoryArray.push(<br/>)}

              OrderHistoryArray.push(`${key} : ${unit[key]} `);
            }
          });
        }
      });
    }

    let newArr = OrderHistoryArray.map((item) => (
      <ListItem>
        <ListItemText>
      {item}
        </ListItemText>
      </ListItem>
    ));
    setOrdersArray(newArr);
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={historyButtonPress}
      >
        Fetch Order History
      </Button>

      <Dialog
        open={orderDisplayState}
        onClose={() => {
          setOrderDisplayState(false);
        }}
      >
        ALL ORDERS IN DATABASE
        <List>{ordersArray}</List>
      </Dialog>
    </>
  );
};

export default OrderHistory;
