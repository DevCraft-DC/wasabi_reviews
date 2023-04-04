import styles from './thanks.module.scss';

const Thanks = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Спасибо за отзыв!</h1>
    <p className={styles.text}>
      Мы ценим ваше мнение и рады, что вы нашли время на оставление отзыва. Ваши пожелания будут
      рассмотрены и учтены. Ждём вас в скорейшем времени.
    </p>
  </div>
);

export default Thanks;
