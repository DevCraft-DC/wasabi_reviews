import type { ReactNode } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);
