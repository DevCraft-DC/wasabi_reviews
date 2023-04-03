import styles from './staff.module.scss';
import staff from '../../assets/staff.json';

import { Card } from '@/components/Card/Card';

const Staff = () => (
  <div className={styles.pageContainer}>
    <h4 className={styles.pageText}>Выберите члена нашей команды, которого вы хотите оценить:</h4>
    <div className={styles.cardsContainer}>
      {staff.map((member) => (
        <div key={member.name} className={styles.staffCardContainer}>
          <Card>
            <img src={member.image} alt={member.name} />
            <p>{member.position}</p>
            <h3>{member.name}</h3>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

export default Staff;
