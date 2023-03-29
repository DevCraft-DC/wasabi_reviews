import type { ReactNode } from 'react';

import styles from './card.module.scss';

interface CardProps {
  content: ReactNode;
}

export const Card = ({ content }: CardProps) => <div className={styles.card}>{content}</div>;
