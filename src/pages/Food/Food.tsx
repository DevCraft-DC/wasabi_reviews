import { useState } from 'react';

import styles from './food.module.scss';
import food from '../../assets/food.json';

import { Card } from '@/components/Card/Card';

const Food = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');
  return (
    <div className={styles.page_container}>
      <h4 className={styles.pageText}>
        Выберите блюдо из наешго меню,
        <br /> которое хотели бы оценить:
      </h4>
      <div className={styles.cardsContainer}>
        {food.map((food) => (
          <Card key={food.title} className={styles.staffCard}>
            <img src={food.image} alt={food.title} />
            <p>{food.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Food;
