import { Link } from 'react-router-dom';

import styles from './chooseReview.module.scss';
import { Card } from './components/Card/Card';

const ChooseReview = () => (
  <>
    <div className={styles.main}>
      <Card content="Блюда" />
      <Card content="Персонал" />
      <Card content="Другое" />
    </div>
    <Link to="#">Назад</Link>
    <Link to="/food">Далее</Link>
  </>
);

export default ChooseReview;
