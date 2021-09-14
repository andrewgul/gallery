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
                className={styles['image']}
                style={{backgroundImage: `url('${card.src}')`}}
            />
            <div className={styles['controls']}>
                <div className={styles['info']}>
                    <p className={styles['title']}>{card.title}</p>
                    <p className={styles['description']}>{card.description}</p>
                </div>
                <div className={styles['rotate']}>
                    <span
                        className={styles['rotate-icon']}
                        onClick={handleRotate}
                    >🔄</span>
                </div>
            </div>
        </div>
    )
}

export default Card
