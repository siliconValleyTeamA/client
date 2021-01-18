/* External dependencies */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './HomePage.module.scss';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import Carousel from 'components/CategoryPage/Carousel/Slide';
import Container from 'components/HomePage/Container';
import ShoppingCart from 'components/Global/ShoppingCart';
import { getUser } from 'api/userAPI';

const cx = classNames.bind(styles);

function HomePage() {
  const getLanguage = () => {
    var userLang = navigator.language.split('-')[1];
    window.sessionStorage.setItem('language', userLang);
  };

  useEffect(() => {
    getLanguage();
    getUser();
  }, []);

  return (
    <div className={cx('home-page')}>
      <Logo />
      <NavigationBar />
      <Carousel />
      <Container />
      <ShoppingCart />
    </div>
  );
}

export default HomePage;
