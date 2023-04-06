import type { HTMLAttributes, ReactNode } from 'react';

import { Link } from 'react-router-dom';

import styles from './linkButton.module.scss';

interface LinkButtonProps extends HTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  to: string;
  icon?: ReactNode;
}

export const LinkButton = ({ children, to, icon }: LinkButtonProps) => (
  <Link to={to} className={styles.button}>
    {children}
    {typeof icon === 'string' && <img className={styles.icon} src={icon} alt="icon" />}
  </Link>
);
