import styles from './home.module.scss';
import { LinkButton } from '../../components/LinkButton/LinkButton';
import arrow from '../../assets/arrow-short.svg';

const Home = () => (
  <div className={styles.page_wrapper}>
    <div className={styles.text_wrapper}>
      <h1>
        Добро пожаловать,
        <br /> Уважаемые гости!
      </h1>
      <p>
        Нам важно ваше мнение, поэтому создали книгу жалоб и предложений. Пожалуйста, выразите свои
        мысли и пожелания. Мы обязательно прочтем каждую запись и улучшим качество обслуживания.
      </p>
    </div>
    <LinkButton to="/wasabi_reviews/userinfo" icon={arrow}>
      Далее
    </LinkButton>
  </div>
);

export default Home;
