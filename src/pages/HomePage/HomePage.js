/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './HomePage.module.scss';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import Carousel from 'components/CategoryPage/Carousel/Slide';
import Container from 'components/HomePage/Container';
import ShoppingCart from 'components/Global/ShoppingCart';
import LanguageSelector from 'components/Global/LanguageSelector';

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx('home-page')}>
      <Logo />
      <NavigationBar />
      <Carousel />
      <Container />
      <ShoppingCart />
      <LanguageSelector/>
    </div>
  );
}

export default HomePage;
