import { Link } from 'react-router-dom';

import styles from './welcome.module.scss';

const Welcome = () => (
  <div>
    <h1 className={styles.title_text}>Добро пожаловать Уважаемые гости</h1>
    <div className={styles.inner_title}>
      Нам важно ваше мнение, поэтому создали книгу жалоб и предложений. Пожалуйста, выразите свои
      мысли и пожелания. Мы обязательно прочтем каждую запись и улучшим качество обслуживания.
    </div>
    <Link to="/userinfo">Далее</Link>
  </div>
);

export default Welcome;
