import { useEffect } from 'react'
import CardModel from '../../entities/CardModel';
import { RootStore } from '../../redux/store';
import Card from '../card/Card';
import Container from '../container/Container';
import styles from './App.module.css'
import { connect } from 'react-redux'
import RotateEnum from '../../entities/RotateEnum';
import { initData, rotate } from '../../redux/gallery/thunks'

interface StateProps {
    cards: CardModel[] | null
}

interface DispatchProps {
    initData: () => void
    rotate: (index: number, prevRotate: RotateEnum) => void
}

interface AppProps extends StateProps, DispatchProps {}

const App: React.FC<AppProps> = ({
    cards,
    initData,
    rotate
}) => {
    useEffect(() => {
        initData()
    }, [])

    return (
        <div className={styles['app']}>
            <Container>
                {cards?.map((card, index) => (
                    <Card
                        key={card.id}
                        index={index}
                        card={card}
                        onRotate={rotate}
                    />
                ))}
            </Container>
        </div>
    )
}

const mapStateToProps = (state: RootStore): StateProps => ({
    cards: state.gallery.data
})

const mapDispatchToProps = {
    initData,
    rotate
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
