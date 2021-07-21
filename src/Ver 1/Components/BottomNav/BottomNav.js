import Button from '../../UI/Button/Button';
import { Link,NavLink,Prompt } from "react-router-dom";
import styles from './BottomNav.module.css';


const BottomNav = (props) => {

  
    return(
  <div className={styles.NavBar}>


      ]  <Button styling={styles.currentNavButton}>Ver 1</Button>

        <NavLink to='/v2' >
        <Button>Ver 2</Button>
        </NavLink>

        <Prompt when={1} message="Lose data including Cart Data?"/>
  </div>
    );
};

export default BottomNav;
