import type { ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import logo from '../../assets/logo.svg';

interface LayoutProps {
  searchComponent?: ReactNode;
}

export const Layout = ({ searchComponent }: LayoutProps) => (
  <div className={styles.layout}>
    <img src={logo} alt="logo" />
    {searchComponent !== undefined && searchComponent}
    <Outlet />
  </div>
);
