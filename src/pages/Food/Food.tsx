import { useState } from 'react';

import styles from './food.module.scss';
import food from '../../assets/food.json';

import { SearchInput } from '@/components/SearchInput/SearchInput';
import { ReviewModal } from '@/components/ReviewModal/ReviewModal';
import { Card } from '@/components/Card/Card';

const Food = () => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');

  const showModal = (foodTitle: string) => {
    setModal(true);
    setTitle(foodTitle);
    localStorage.setItem('target', foodTitle);
  };

  const filteredFood = food.filter((dish) =>
    dish.title.toUpperCase().includes(searchText.toUpperCase())
  );

  return (
    <div className={styles.page_container}>
      <ReviewModal
        reviewTarget={title}
        show={modal}
        removeModal={() => {
          setModal(false);
        }}
      />
      <h4 className={styles.page_text}>
        Выберите блюдо из нашего меню, которое хотели бы оценить:
      </h4>

      <SearchInput searchText={searchText} setSearchText={setSearchText} />

      <div className={styles.cards_container}>
        {filteredFood.map((food) => (
          <Card
            onClick={() => {
              showModal(food.title);
            }}
            key={food.title}
            className={styles.dish_card}
          >
            <img src={food.image} alt={food.title} />
            <div className={styles.data}>
              <h3>{food.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Food;
