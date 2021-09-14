import CardModel from '../../entities/CardModel'
import RotateEnum from '../../entities/RotateEnum'
import styles from './Card.module.css'
import cn from 'classnames'

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
    const { rotate, title, description, src } = card

    const handleRotate = (): void => {
        onRotate(index, card.rotate)
    }

    return (
        <div className={styles['card']}>
            <div className={styles['image-crop']}>
                <div
                    className={cn({
                        [styles['image']]: true,
                        [styles['rotate-deg0']]: rotate === RotateEnum.deg0,
                        [styles['rotate-deg90']]: rotate === RotateEnum.deg90,
                        [styles['rotate-deg180']]: rotate === RotateEnum.deg180,
                        [styles['rotate-deg270']]: rotate === RotateEnum.deg270
                    })}
                    style={{backgroundImage: `url('${src}')`}}
                />
            </div>
            <div className={styles['controls']}>
                <div className={styles['info']}>
                    <p className={styles['title']}>{title}</p>
                    <p className={styles['description']}>{description}</p>
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
