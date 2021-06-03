import styles from './Card.module.css'

const Card = (props) =>{
    return(
    <div className={styles.card} style={ 
{   width: (props.cardWidth || ''),
    backgroundColor: (props.cardColor || ''),
    color: (props.cardFontColor || ''), } 
}> {props.children}
</div>)
};

export default Card;