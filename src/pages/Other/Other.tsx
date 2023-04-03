import { useNavigate } from 'react-router-dom';

import styles from './other.module.scss';
import { Button } from '../../components/Button/Button';

const Other = () => {
  const navigate = useNavigate();
  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder="Ваш отзыв..."
        name="review"
        cols={2}
        rows={6}
      />
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад
        </Button>
        <Button>Отправить</Button>
      </div>
    </>
  );
};

export default Other;
