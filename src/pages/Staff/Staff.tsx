import styles from './staff.module.scss';
import staff from '../../assets/staff.json';

import { Card } from '@/components/Card/Card';

const Staff = () => (
  <div className={styles.page_container}>
    <h4 className={styles.page_text}>
      Выберите члена нашей команды,
      <br /> которого вы хотите оценить:
    </h4>
    <div className={styles.cards_container}>
      {staff.map((member) => (
        <Card key={member.name} className={styles.staff_card}>
          <img src={member.image} alt={member.name} />
          <div className={styles.data}>
            <p>{member.position}</p>
            <h3>{member.name}</h3>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Staff;
