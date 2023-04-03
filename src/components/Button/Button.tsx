import type { HTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);
