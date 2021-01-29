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
import Notification from 'components/Global/Notification';

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx('home-page')}>
      <Logo />
      <NavigationBar />
      <Carousel />
      <Container />
      <ShoppingCart />
      <Notification text="hi!" />
    </div>
  );
}

export default HomePage;
