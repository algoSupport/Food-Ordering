import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@material-ui/core";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import MobileOffIcon from "@material-ui/icons/MobileOff";
import { useState } from "react";
import { Link, Prompt } from "react-router-dom";

const BottomNav = (props) => {
  const [NavValue, setNavValue] = useState("Ver2");
  const [isAlert, setIsAlert] = useState(true);

  async function getOrderHistory () {
    let orderHistoryObjResponse= await fetch("https://foodorderapp-cf013-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json");
    let orderHistoryObj = await orderHistoryObjResponse.json();
    for (const key in orderHistoryObj) {
      orderHistoryObj[key].forEach(order => {
          if (!Array.isArray(order)) {
            console.log("Order Time: "+ order);
          }
            else {
          order.forEach(unit =>{
           console.log(unit);
            })
          }
      }) 
      }
    };
 
  

  return (
    <>
      <BottomNavigation showLabels value={NavValue}>

        <BottomNavigationAction
          label="Ver1"
          icon={<MobileOffIcon />}
          component={Link}
          to={"/v1"}
        />

        <BottomNavigationAction
          label="Ver2"
          icon={<MobileFriendlyIcon />}
          value="Ver2"
        />
      </BottomNavigation>

      <Prompt when={isAlert} message="Lose data including Cart data?"></Prompt>
      <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={getOrderHistory}
        >
          Get
        </Button>
    </>
  );
};

export default BottomNav;
