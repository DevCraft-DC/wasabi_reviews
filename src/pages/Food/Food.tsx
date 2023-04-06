import styles from './food.module.scss';
import food from '../../assets/food.json';

import { SearchInput } from '@/components/SearchInput/SearchInput';
import { Card } from '@/components/Card/Card';

const Food = () => (
  <div className={styles.page_container}>
    <h4 className={styles.page_text}>
      Выберите блюдо из наешго меню,
      <br /> которое хотели бы оценить:
    </h4>

    <SearchInput />

    <div className={styles.cards_container}>
      {food.map((food) => (
        <Card key={food.title} className={styles.dish_card}>
          <img src={food.image} alt={food.title} />
          <div className={styles.data}>
            <p>{food.title}</p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Food;
