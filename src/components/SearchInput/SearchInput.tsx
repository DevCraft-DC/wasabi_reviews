import styles from './searchInput.module.scss';
import searchIcon from '../../assets/search.svg';

interface SearchInputProps {
  searchText: string;
  setSearchText: (arg0: string) => void;
}

export const SearchInput = ({ searchText, setSearchText }: SearchInputProps) => (
  <div className={styles.search_wrapper}>
    <input
      className={styles.search_input}
      type="text"
      placeholder="Введите название блюда"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
    <img className={styles.search_icon} src={searchIcon} alt="search icon" />
  </div>
);
