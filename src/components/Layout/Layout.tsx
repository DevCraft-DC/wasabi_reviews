import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import logo from '../../assets/red-logo.png';

export const Layout = () => (
  <div className={styles.layout}>
    <div className={styles.layout_wrapper}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
    <Outlet />
  </div>
);
