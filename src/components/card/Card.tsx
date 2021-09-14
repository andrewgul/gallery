import CardModel from '../../entities/CardModel'
import styles from './Card.module.css'

interface CardProps {
    card: CardModel
}

const Card: React.FC<CardProps> = ({
    card
}) => {
    return (
        <div className={styles['card']}>
            <div
                className={styles['image-container']}
                style={{backgroundImage: `url('${card.src}')`}}
            />
        </div>
    )
}

export default Card
