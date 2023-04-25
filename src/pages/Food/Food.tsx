import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './food.module.scss';
import food from '../../assets/food.json';
import arrow from '../../assets/arrow-short.svg';

import { SearchInput } from '@/components/SearchInput/SearchInput';
import { ReviewModal } from '@/components/ReviewModal/ReviewModal';
import { Card } from '@/components/Card/Card';
import { Picker } from '@/components/Picker/Picker';
import { Tag } from '@/components/Picker/Tag';

const categories = [
  'Все',
  'Суши и Роллы',
  'Мангал',
  'Нац. кухня',
  'Евро кухня',
  'Салаты',
  'Другое'
];

const Food = () => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();

  const changeCategory = (index: number) => {
    setCategory(index);
  };

  const showModal = (foodTitle: string) => {
    setModal(true);
    setTitle(foodTitle);
    localStorage.setItem('target', foodTitle);
  };

  const filteredFood = food.filter((dish) => {
    if (category !== 0) {
      return (
        dish.title.toUpperCase().includes(searchText.toUpperCase()) && dish.category === category
      );
    }
    return dish.title.toUpperCase().includes(searchText.toUpperCase());
  });

  return (
    <div className={styles.page_container}>
      <ReviewModal
        reviewTarget={title}
        show={modal}
        removeModal={() => {
          setModal(false);
        }}
      />
      <button
        className={styles.back_button}
        onClick={() => {
          navigate('/choose');
        }}
      >
        <img className={styles.arrow_icon} src={arrow} alt="back arrow" />
      </button>
      <h4 className={styles.page_text}>Выберите блюдо, которое хотите оценить:</h4>

      <SearchInput searchText={searchText} setSearchText={setSearchText} />

      <Picker>
        {categories.map((cat, index) => (
          <Tag
            key={cat}
            index={index}
            value={category}
            changeCategory={() => {
              changeCategory(index);
            }}
          >
            {cat}
          </Tag>
        ))}
      </Picker>

      {filteredFood.length > 0 ? (
        <div className={styles.cards_container}>
          {filteredFood.map((food) => (
            <Card
              onClick={() => {
                showModal(food.title);
              }}
              key={food.title}
              className={styles.dish_card}
            >
              <img loading="lazy" src={food.image} alt={food.title} />
              <div className={styles.data}>
                <h3>{food.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className={styles.not_found_text}>Ничего не найдено!</p>
      )}
    </div>
  );
};

export default Food;
