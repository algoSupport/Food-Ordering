import {BottomNavigation,BottomNavigationAction} from "@material-ui/core";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import MobileOffIcon from "@material-ui/icons/MobileOff";
import { useState } from "react";
import {Link} from "react-router-dom"

const BottomNav = props => {

    const [NavValue, setNavValue] = useState('Ver2')

return(
<BottomNavigation showLabels value={NavValue}>
  <BottomNavigationAction
    label="Ver1"
    icon={<MobileOffIcon />}
    component={Link}
    to={"/v1"}
  />
  <BottomNavigationAction label="Ver2" icon={<MobileFriendlyIcon />} value="Ver2"/>
</BottomNavigation>
);
}

export default BottomNav;