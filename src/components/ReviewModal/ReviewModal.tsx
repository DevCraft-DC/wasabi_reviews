import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';
import styles from './reviewmodal.module.scss';

import { getValueFromLS } from '@/utils/getValueFromLS';
import { createTemplate } from '@/utils/createTemplate';

const token = '6217522529:AAHSeO_K1sy7NlTC0aLPmn_m6XQaDrnn_Ls';
const chatId = '-822673453';

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

  const template = createTemplate({ username, phone, review, category, target: 'Бургер' });

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${template}`;

  const sendMessage = () => {
    navigate('/wasabi_reviews/thanks');
    localStorage.clear();
    void fetch(url);
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
