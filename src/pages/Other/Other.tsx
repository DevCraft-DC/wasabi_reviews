import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './other.module.scss';
import { Button } from '../../components/Button/Button';

import { sendReview } from '@/utils/sendReview';

const Other = () => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  const sendMessage = () => {
    sendReview(review);
    setReview('');
    navigate('/thanks');
  };

  return (
    <>
      <h4 className={styles.page_text}>Ваши жалобы и предложения:</h4>
      <textarea
        className={styles.textarea}
        placeholder="Введите текст..."
        name="review"
        value={review}
        cols={2}
        rows={6}
        onChange={(e) => {
          setReview(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            navigate('/choose');
          }}
        >
          Назад
        </Button>
        <Button
          onClick={() => {
            sendMessage();
          }}
          disabled={review === ''}
        >
          Отправить
        </Button>
      </div>
    </>
  );
};

export default Other;
