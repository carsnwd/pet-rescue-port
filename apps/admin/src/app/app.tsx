import styles from './app.module.scss';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

export function App() {
  return (
    <div className={styles.app}>
      <Button>Bulma!</Button>
    </div>
  );
}

export default App;
