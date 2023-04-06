import { useState } from 'react';

import styles from './searchInput.module.scss';
import searchIcon from '../../assets/search.svg';

export const SearchInput = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');
  return (
    <div className={styles.search_wrapper}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Введите название блюда"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <img className={styles.search_icon} src={searchIcon} alt="search icon" />
    </div>
  );
};
