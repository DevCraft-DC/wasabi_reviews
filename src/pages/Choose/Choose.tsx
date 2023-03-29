import { Link } from 'react-router-dom';

import styles from './choose.module.scss';
import { Card } from './components/Card/Card';

const Choose = () => (
  <>
    <div className={styles.main}>
      <Card content="Блюда" />
      <Card content="Персонал" />
      <Card content="Другое" />
    </div>
    <Link to="#">Назад</Link>
  </>
);

export default Choose;
