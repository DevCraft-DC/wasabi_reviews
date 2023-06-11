import { type HTMLAttributes, type ReactNode } from 'react';

import styles from './tag.module.scss';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  cat: string;
  value: string;
  changeCategory: () => void;
}

export const Tag = ({ children, cat, value, changeCategory }: TagProps) => (
  <span
    onClick={() => {
      changeCategory();
    }}
    className={value === cat ? `${styles.tag} ${styles.chosen}` : styles.tag}
  >
    {children}
  </span>
);
