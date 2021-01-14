/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './HomePage.module.scss';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import LanguageModal from 'components/CategoryPage/LanguageModal';
import Carousel from 'components/CategoryPage/Carousel/Slide';
import GoodsList from 'components/CategoryPage/GoodsList';

const cx = classNames.bind(styles);

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const getLanguage = () => {
    if (window.sessionStorage.getItem('language')) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <div className={cx('home-page')}>
      <Logo />
      <LanguageModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationBar />
      <Carousel />
      <GoodsList />
    </div>
  );
}

export default HomePage;
