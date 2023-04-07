import { useEffect, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import styles from './layout.module.scss';
import logo from '../../assets/red-logo.png';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

const SHOW_SCROLL_TO_TOP = 400;

export const Layout = () => {
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [scrollToTop, setScrollToTop] = useState(false);
  const { pathname } = useLocation();
  const showScrollToTop = (pathname.includes('food') || pathname.includes('staff')) && scrollToTop;

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (windowScroll > SHOW_SCROLL_TO_TOP) {
      setScrollToTop(true);
    } else setScrollToTop(false);
  }, [windowScroll]);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.layout}>
      <div className={styles.layout_wrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      {showScrollToTop && <ScrollToTop onClick={handleScrollToTop} />}
      <Outlet />
    </div>
  );
};
