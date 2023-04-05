import type { HTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, disabled, ...props }: ButtonProps) => (
  <button className={styles.button} disabled={disabled} {...props}>
    {children}
  </button>
);
