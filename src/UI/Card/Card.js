import {Card, CardContent} from '@material-ui/core'
import styles from './Card.module.css'

const CardNew = (props) =>{
    return(

//     <div className={styles.card}
//     style={ 
// {   width: (props.cardWidth || ''),
//     backgroundColor: (props.cardColor || ''),
//     color: (props.cardFontColor || ''), } }
//     onClick={props.btnClick} > 
    
//     {props.children}

// </div>)

        <Card>
            {props.children}
        </Card>
    )
};

export default CardNew;