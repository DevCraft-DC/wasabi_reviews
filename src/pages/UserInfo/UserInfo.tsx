import { useState } from 'react';

import styles from './userinfo.module.scss';
import { LinkButton } from '../../components/LinkButton/LinkButton';

import PhoneInput from '@/components/PhoneInput/PhoneInput';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  function handleNameInput(value: string) {
    const formattedName = value.replace(/[^a-zA-Z0-9\u0400-\u04FF-"' ]/, '');
    setName(formattedName);
  }

  function handleEmailInput(value: string) {
    const formattedEmail = value.replace(/[^a-zA-Z0-9._%+~*!-@]/, '');
    setEmail(formattedEmail);
  }

  const saveInLS = () => {
    if (name !== '' && name.match(/[#&+/\\]/g) === null) {
      localStorage.setItem('name', name);
    } else {
      localStorage.removeItem('name');
    }
    if (phoneNumber !== '') {
      localStorage.setItem('phone number', phoneNumber);
    } else {
      localStorage.removeItem('phone number');
    }
    if (email !== '') {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Введите ваши данные <br /> (по желанию)
      </h2>

      <div className={styles.input_container}>
        <input
          className={styles.first_input_element}
          maxLength={40}
          type="text"
          placeholder="Ваше имя..."
          value={name}
          onChange={(e) => {
            handleNameInput(e.target.value);
          }}
        />
      </div>

      <div className={styles.input_container}>
        <PhoneInput
          className={styles.phone_input}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </div>

      <div className={styles.input_container}>
        <input
          className={styles.last_input_element}
          type="email"
          placeholder="Ваша электронная почта..."
          value={email}
          onChange={(e) => {
            handleEmailInput(e.target.value);
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
