import styles from './Container.module.css'

const Container: React.FC = ({ children }) => (
    <div className={styles['container']}>
        <p className={styles['title']}>Gallery</p>
        <div className={styles['content']}>
            {children}
        </div>
    </div>
)

export default Container
