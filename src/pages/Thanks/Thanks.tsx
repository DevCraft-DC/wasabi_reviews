import styles from './thanks.module.scss';

import { LinkButton } from '@/components/LinkButton/LinkButton';

const Thanks = () => {
  const removeData = () => {
    localStorage.removeItem('category');
    localStorage.removeItem('target');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Спасибо за отзыв!</h1>
      <p className={styles.text}>
        Мы ценим ваше мнение и обязательно рассмотрим ваш отзыв. Благодарим за то, что поделились с
        нами своим опытом.
      </p>
      <LinkButton to="/choose" onClick={removeData}>
        Оставить еще один отзыв
      </LinkButton>
    </div>
  );
};

export default Thanks;
