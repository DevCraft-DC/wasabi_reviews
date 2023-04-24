import { type HTMLAttributes, type ReactNode } from 'react';

import styles from './tag.module.scss';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  index: number;
  value: number;
  changeCategory: () => void;
}

export const Tag = ({ children, index, value, changeCategory }: TagProps) => (
  <span
    onClick={() => {
      changeCategory();
    }}
    className={value === index ? `${styles.tag} ${styles.chosen}` : styles.tag}
  >
    {children}
  </span>
);
