import type { HTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
};

export const Button = ({ children, disabled, icon, ...props }: ButtonProps) => (
  <button className={styles.button} disabled={disabled} {...props}>
    {typeof icon === 'string' && <img className={styles.icon} src={icon} alt="icon" />}
    {children}
  </button>
);
