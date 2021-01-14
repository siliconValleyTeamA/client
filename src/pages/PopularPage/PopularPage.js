/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PopularPage.module.scss';
import GoodsList from 'components/CategoryPage/GoodsList';
import Banner from 'components/PopularPage/Banner';
import NavigationBar from 'components/Global/NavigationBar';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';

const cx = classNames.bind(styles);

function PopularPage() {
  return (
    <div className={cx('popular-page')}>
      <Logo />
      <NavigationBar />
      <Banner className={cx('banner')} />
      <GoodsList popular />
      <ShoppingCart />
    </div>
  );
}

export default PopularPage;
