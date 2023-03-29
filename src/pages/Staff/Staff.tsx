import styles from './staff.module.scss';
import staff from '../../assets/staff.json';

import { Card } from '@/components/Card/Card';

const Staff = () => (
  <div className={styles.container}>
    {staff.map((member) => (
      <div key={member.name}>
        <Card>
          <img src={member.image} alt={member.name} />
          <p>{member.position}</p>
          <h3>{member.name}</h3>
        </Card>
      </div>
    ))}
  </div>
);

export default Staff;
