import Card from '../card/Card';
import Container from '../container/Container';
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles['app']}>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </div>
  );
}

export default App;
