import CardModel from '../../entities/CardModel'
import RotateEnum from '../../entities/RotateEnum'
import styles from './Card.module.css'

interface CardProps {
    index: number
    card: CardModel,
    onRotate: (index: number, rotate: RotateEnum) => void
}

const Card: React.FC<CardProps> = ({
    index,
    card,
    onRotate
}) => {
    const handleRotate = (): void => {
        onRotate(index, card.rotate)
    }

    return (
        <div className={styles['card']}>
            <div
                className={styles['image-container']}
                style={{backgroundImage: `url('${card.src}')`}}
            />
            <div onClick={handleRotate}>Rotate {card.rotate}</div>
        </div>
    )
}

export default Card
