import styles from './Button.module.css'

const Button = props =>{
    return(
        <button type={props.type} onClick={props.clickFunc} className={styles.formButton} 
       className={props.styling}>
           {props.content}
        </button>
    )
};

export default Button;