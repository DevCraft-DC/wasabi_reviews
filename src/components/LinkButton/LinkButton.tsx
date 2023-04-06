import type { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import styles from './linkButton.module.scss';

interface LinkButtonProps {
  children: ReactNode;
  to: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export const LinkButton = ({ children, to, icon, onClick }: LinkButtonProps) => (
  <Link to={to} className={styles.button} onClick={onClick}>
    {children}
    {typeof icon === 'string' && <img className={styles.icon} src={icon} alt="icon" />}
  </Link>
);
