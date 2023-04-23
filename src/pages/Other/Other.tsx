import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './other.module.scss';
import { Button } from '../../components/Button/Button';
import { getValueFromLS } from '../../utils/getValueFromLS';
import { createTemplate } from '../../utils/createTemplate';

const Other = () => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();
  const username = getValueFromLS('name');
  const phone = getValueFromLS('phone number');
  const category = getValueFromLS('category');
  const target = getValueFromLS('target');
  const email = getValueFromLS('email');

  const template = createTemplate({ username, phone, email, review, category, target });
  const encoded = encodeURIComponent(template);

  const sendReview = () => {
    void fetch('https://wasabi-backend.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ review: encoded })
    });
  };

  const sendMessage = () => {
    navigate('/thanks');
    sendReview();
    setReview('');
  };

  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder="Ваш отзыв..."
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
