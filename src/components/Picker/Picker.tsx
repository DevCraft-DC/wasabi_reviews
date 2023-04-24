import { type ReactNode } from 'react';

import styles from './picker.module.scss';

interface PickerProps {
  children: ReactNode;
}

export const Picker = ({ children }: PickerProps) => (
  <div className={styles.main}>
    <div className={styles.container}>{children}</div>
  </div>
);
