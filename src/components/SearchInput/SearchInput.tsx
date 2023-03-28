import styles from './searchInput.module.scss';

export const SearchInput = () => (
  <div className={styles.search_wrapper}>
    <input className={styles.search_input} type="text" placeholder="Введите название блюда" />
  </div>
);
