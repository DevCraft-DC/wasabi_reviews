import styles from './thanks.module.scss';

import { LinkButton } from '@/components/LinkButton/LinkButton';

const Thanks = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Спасибо за отзыв!</h1>
    <p className={styles.text}>
      Мы ценим ваше мнение и рады, что вы нашли время на оставление отзыва. Ваши пожелания будут
      рассмотрены и учтены. Ждём вас в скорейшем времени.
    </p>
    <LinkButton to="/wasabi_reviews/choose">Оставить еще один отзыв</LinkButton>
  </div>
);

export default Thanks;
