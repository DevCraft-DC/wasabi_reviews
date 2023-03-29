import styles from './searchInput.module.scss';
import searchIcon from '../../assets/search.svg';

export const SearchInput = () => (
  <div className={styles.search_wrapper}>
    <input className={styles.search_input} type="text" placeholder="Введите название блюда" />
    <img className={styles.search_icon} src={searchIcon} alt="search icon" />
  </div>
);
