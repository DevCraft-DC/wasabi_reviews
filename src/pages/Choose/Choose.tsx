import { Link, useNavigate } from 'react-router-dom';

import styles from './choose.module.scss';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import arrow from '../../assets/arrow-short.svg';

const Choose = () => {
  const navigate = useNavigate();
  const saveCategory = (catName: string) => {
    localStorage.setItem('category', catName);
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.page_text}>О чём вы хотите оставить отзыв?</h4>
      <div className={styles.main}>
        <Link to="/wasabi_reviews/food" className={styles.card_container}>
          <Card
            onClick={() => {
              saveCategory('Еда');
            }}
            className={styles.choose_card}
          >
            <span>Еда</span>
          </Card>
        </Link>

        <Link to="/wasabi_reviews/staff" className={styles.card_container}>
          <Card
            onClick={() => {
              saveCategory('Персонал');
            }}
            className={styles.choose_card}
          >
            <span>Персонал</span>
          </Card>
        </Link>

        <Link to="/wasabi_reviews/other" className={styles.card_container}>
          <Card
            onClick={() => {
              saveCategory('Другое');
            }}
            className={styles.choose_card}
          >
            <span>Другое</span>
          </Card>
        </Link>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          icon={arrow}
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default Choose;
