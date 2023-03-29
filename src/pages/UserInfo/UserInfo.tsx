import { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from './userinfo.module.scss';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveInLS = () => {
    if (name !== '') {
      localStorage.setItem('name', name);
    }
    if (phoneNumber !== '') {
      localStorage.setItem('phone number', phoneNumber);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Введите ваши данные <br /> (по желанию)
      </h2>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Ваше имя..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Ваш номер телефона..."
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>

      <Link to="/wasabi_reviews/choose" onClick={saveInLS}>
        Далее
      </Link>
    </div>
  );
};

export default UserInfo;
