import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';
import styles from './reviewmodal.module.scss';

import { getValueFromLS } from '@/utils/getValueFromLS';

interface ReviewModalProps {
  reviewTarget: string;
  show: boolean;
  removeModal: () => void;
}

export const ReviewModal = ({ reviewTarget, show, removeModal }: ReviewModalProps) => {
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

  const cancellation = () => {
    localStorage.removeItem('target');
    removeModal();
    setReview('');
  };

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div className={styles.modal_content}>
        <p className={styles.name}>
          Оставить отзыв о:
          <br /> {reviewTarget}
        </p>
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
              cancellation();
            }}
          >
            Отменить
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
      </div>
    </div>
  );
};
