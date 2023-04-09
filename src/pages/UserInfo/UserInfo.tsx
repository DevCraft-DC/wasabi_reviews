import { useState } from 'react';

import styles from './userinfo.module.scss';
import { LinkButton } from '../../components/LinkButton/LinkButton';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveInLS = () => {
    if (name !== '' && name.match(/[#&+/\\]/g) === null) {
      localStorage.setItem('name', name);
    } else {
      localStorage.removeItem('name');
    }
    if (phoneNumber !== '' && phoneNumber.match(/\b\d[/\\#&]\b/g) !== null) {
      localStorage.setItem('phone number', phoneNumber);
    } else {
      localStorage.removeItem('phone number');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Введите ваши данные <br /> (по желанию)
      </h2>

      <div className={styles.input_container}>
        <input
          type="text"
          placeholder="Ваше имя..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className={styles.input_container}>
        <input
          type="tel"
          className={styles.last_input_element}
          placeholder="Ваш номер телефона..."
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>

      <LinkButton to="/wasabi_reviews/choose" onClick={saveInLS}>
        Далее
      </LinkButton>
    </div>
  );
};

export default UserInfo;
