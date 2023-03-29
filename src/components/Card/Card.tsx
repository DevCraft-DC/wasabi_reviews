import { type ReactNode } from 'react';

import styles from './card.module.scss';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => <div className={styles.container}>{children}</div>;
