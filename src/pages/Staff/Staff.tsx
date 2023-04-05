import styles from './staff.module.scss';
import staff from '../../assets/staff.json';

import { Card } from '@/components/Card/Card';

const Staff = () => (
  <div className={styles.pageContainer}>
    <h4 className={styles.pageText}>
      Выберите члена нашей команды,
      <br /> которого вы хотите оценить:
    </h4>
    <div className={styles.cardsContainer}>
      {staff.map((member) => (
        <Card key={member.name} className={styles.staffCard}>
          <img src={member.image} alt={member.name} />
          <p>{member.position}</p>
          <h3>{member.name}</h3>
        </Card>
      ))}
    </div>
  </div>
);

export default Staff;
