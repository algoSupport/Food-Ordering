import {BottomNavigation,BottomNavigationAction, Dialog} from "@material-ui/core";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import MobileOffIcon from "@material-ui/icons/MobileOff";
import { useState } from "react";
import {Link,Prompt} from "react-router-dom"

const BottomNav = props => {

    const [NavValue, setNavValue] = useState('Ver2')
    const [isAlert, setIsAlert] = useState(true);


return(
  <>
<BottomNavigation showLabels value={NavValue}>
  
  <BottomNavigationAction
    label="Ver1"
    icon={<MobileOffIcon />}
    component={Link}
    to={"/v1"}
  />

  <BottomNavigationAction label="Ver2" icon={<MobileFriendlyIcon />} value="Ver2"/>
</BottomNavigation>

<Prompt when={isAlert} message="Lose data including Cart data?"></Prompt>

</>
);
}

export default BottomNav;