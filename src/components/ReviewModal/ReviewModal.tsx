import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';
import styles from './reviewmodal.module.scss';

import { sendReview } from '@/utils/sendReview';

interface ReviewModalProps {
  reviewTarget: string;
  show: boolean;
  removeModal: () => void;
}

export const ReviewModal = ({ reviewTarget, show, removeModal }: ReviewModalProps) => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  const sendMessage = () => {
    sendReview(review);
    setReview('');
    navigate('/thanks');
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
