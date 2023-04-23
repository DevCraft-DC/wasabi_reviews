import { Link, useNavigate } from 'react-router-dom';

import styles from './choose.module.scss';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

const Choose = () => {
  const navigate = useNavigate();
  const saveCategory = (catName: string) => {
    localStorage.setItem('category', catName);
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.page_text}>Выберите категорию:</h4>
      <div className={styles.main}>
        <Link to="/food" className={styles.card_container}>
          <Card
            onClick={() => {
              saveCategory('Еда');
            }}
            className={styles.choose_card}
          >
            <span>Еда</span>
            <Button>Выбрать</Button>
          </Card>
        </Link>

        <Link to="/staff" className={styles.card_container}>
          <Card
            onClick={() => {
              saveCategory('Персонал');
            }}
            className={styles.choose_card}
          >
            <span>Персонал</span>
            <Button>Выбрать</Button>
          </Card>
        </Link>

        <Link to="/other" className={styles.card_container}>
          <Card
            onClick={() => {
              saveCategory('Другое');
            }}
            className={styles.choose_card}
          >
            <span>Другое</span>
            <Button>Выбрать</Button>
          </Card>
        </Link>
        <Button
          onClick={() => {
            navigate('/userinfo');
          }}
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default Choose;
