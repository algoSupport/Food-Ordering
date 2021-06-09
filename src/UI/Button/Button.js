import styles from './Button.module.css'

const Button = props =>{
    return(
        <button type={props.type} onClick={props.clickFunc} className={ props.styling || styles.formButton}>
           {props.content}
        </button>
    )
};

export default Button;