import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './staff.module.scss';
import staff from '../../assets/staff.json';

import { Card } from '@/components/Card/Card';
import { ReviewModal } from '@/components/ReviewModal/ReviewModal';
import { Button } from '@/components/Button/Button';

const Staff = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const showModal = (memberName: string) => {
    setModal(true);
    setName(memberName);
    localStorage.setItem('target', memberName);
  };

  return (
    <div className={styles.page_container}>
      <ReviewModal
        reviewTarget={name}
        show={modal}
        removeModal={() => {
          setModal(false);
        }}
      />
      <h4 className={styles.page_text}>Выберите работника, которого хотите оценить:</h4>
      <div className={styles.cards_container}>
        {staff.map((member) => (
          <Card
            onClick={() => {
              showModal(member.name);
            }}
            key={member.name}
            className={styles.staff_card}
          >
            <img src={member.image} alt={member.name} />
            <div className={styles.data}>
              <p>{member.position}</p>
              <h3>{member.name}</h3>
            </div>
          </Card>
        ))}
      </div>
      <Button
        onClick={() => {
          navigate('/wasabi_reviews/choose');
        }}
      >
        Назад
      </Button>
    </div>
  );
};

export default Staff;
