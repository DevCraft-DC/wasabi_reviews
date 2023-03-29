import type { ReactNode } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import styles from './layout.module.scss';
import logo from '../../assets/logo.svg';

interface LayoutProps {
  searchComponent?: ReactNode;
}

export const Layout = ({ searchComponent }: LayoutProps) => {
  const { pathname } = useLocation();
  const isFoodPage = pathname.includes('food');

  return (
    <div className={styles.layout}>
      <div className={styles.layout_wrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
        {searchComponent !== undefined && isFoodPage && searchComponent}
      </div>
      <Outlet />
    </div>
  );
};
