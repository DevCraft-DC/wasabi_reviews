import type { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import styles from './linkButton.module.scss';

interface LinkButtonProps {
  children: ReactNode;
  to: string;
}

export const LinkButton = ({ children, to }: LinkButtonProps) => (
  <Link to={to} className={styles.button}>
    {children}
  </Link>
);
