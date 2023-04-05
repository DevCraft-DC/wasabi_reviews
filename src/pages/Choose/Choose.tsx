import { Link } from 'react-router-dom';

import styles from './choose.module.scss';
import { Card } from '../../components/Card/Card';

const Choose = () => {
  const saveCategory = (catName: string) => {
    localStorage.setItem('category', catName);
  };

  return (
    <>
      <div className={styles.main}>
        <h4 className={styles.page_text}>О чём вы хотите оставить отзыв?</h4>

        <Link to="/wasabi_reviews/food">
          <Card
            onClick={() => {
              saveCategory('food');
            }}
            className={styles.choose_card}
          >
            <span>Еда</span>
          </Card>
        </Link>

        <Link to="/wasabi_reviews/staff">
          <Card
            onClick={() => {
              saveCategory('staff');
            }}
            className={styles.choose_card}
          >
            <span>Персонал</span>
          </Card>
        </Link>

        <Link to="/wasabi_reviews/other">
          <Card
            onClick={() => {
              saveCategory('other');
            }}
            className={styles.choose_card}
          >
            <span>Другое</span>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Choose;
