import Button from '../../UI/Button/Button';
import { Link,NavLink } from "react-router-dom";
import styles from './BottomNav.module.css';


const BottomNav = (props) => {

    return(
  <div className={styles.NavBar}>

        <NavLink to='/v1' activeClassName={styles.CurrentNav}>
        <Button >Ver 1</Button>
        </NavLink>

        <NavLink to='/v2'>
        <Button>Ver 2</Button>
        </NavLink>
  </div>
    );
};

export default BottomNav;
