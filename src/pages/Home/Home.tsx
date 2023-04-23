import styles from './home.module.scss';
import { LinkButton } from '../../components/LinkButton/LinkButton';

const Home = () => (
  <div className={styles.page_wrapper}>
    <div className={styles.text_wrapper}>
      <h1>
        Добро пожаловать,
        <br /> Уважаемые гости!
      </h1>
      <p>
        Мы ценим ваше мнение, поэтому теперь вы можете оставить свои комментарии и отзывы о нашем
        ресторане, поделиться своим опытом и предложить свои идеи. Мы обещаем рассмотреть каждую
        жалобу или предложение, и принять меры, чтобы улучшить наш сервис и обслуживание.
      </p>
    </div>
    <LinkButton to="/userinfo">Далее</LinkButton>
  </div>
);

export default Home;
