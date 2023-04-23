import styles from './thanks.module.scss';

import { LinkButton } from '@/components/LinkButton/LinkButton';

const Thanks = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Спасибо за отзыв!</h1>
    <p className={styles.text}>
      Мы ценим ваше мнение и обязательно рассмотрим ваш отзыв. Благодарим за то, что поделились с
      нами своим опытом.
    </p>
    <LinkButton to="/choose">Оставить еще один отзыв</LinkButton>
  </div>
);

export default Thanks;
