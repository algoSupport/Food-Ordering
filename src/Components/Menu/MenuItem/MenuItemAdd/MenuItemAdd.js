import styles from './MenuItemAdd.module.css';


const MenuItemAdd = props =>{
    return(
        <div className={styles.MenuAddBox}>
            
            <label className={styles.LabelBox} htmlFor={props.MenuItemName}>
                <strong>Amount: </strong></label>
            <input className={styles.NumberBox} type='number' id={props.MenuItemName} />
            <input className={styles.SubmitButton} type="submit" id={props.MenuItemName} value="ADD"/>
            
        </div>
    )
};

export default MenuItemAdd;