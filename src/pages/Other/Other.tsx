import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './other.module.scss';
import { Button } from '../../components/Button/Button';
import { getValueFromLS } from '../../utils/getValueFromLS';

const Other = () => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();
  const username = getValueFromLS('name');
  const phone = getValueFromLS('phone number');
  const category = getValueFromLS('category');
  const target = getValueFromLS('target');
  const email = getValueFromLS('email');

  const sendReview = () => {
    void fetch('https://reviews-tg-proxy.onrender.com/wasabi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, phone, email, review, category, target })
    });
  };

  const sendMessage = () => {
    navigate('/thanks');
    sendReview();
    setReview('');
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
