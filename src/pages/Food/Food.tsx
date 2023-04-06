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
        <Card key={food.title} className={styles.staff_card}>
          <img src={food.image} alt={food.title} />
          <p>{food.title}</p>
        </Card>
      ))}
    </div>
  </div>
);

export default Food;
