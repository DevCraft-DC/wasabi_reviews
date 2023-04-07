import type { HTMLAttributes } from 'react';

import styles from './scrollToTop.module.scss';
import arrow from '../../assets/arrow-short.svg';

type ScrollToTopProps = HTMLAttributes<HTMLButtonElement>;

export const ScrollToTop = ({ ...props }: ScrollToTopProps) => (
  <button className={styles.scroll_btn} {...props}>
    <img className={styles.arrow_icon} src={arrow} alt="arrow icon" />
  </button>
);
