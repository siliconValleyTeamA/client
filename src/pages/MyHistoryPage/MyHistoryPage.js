/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiShoppingBag3Fill } from 'react-icons/ri';

/* Internal dependencies */
import styles from './MyHistoryPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import GoodsList from 'components/MyDetailPage/GoodsList';
import ShoppingCart from 'components/Global/ShoppingCart';

const cx = classNames.bind(styles);

function MyHistoryPage() {
  return (
    <div className={cx('myhistory-page')}>
      <BackButton />
      <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
      <Header header="펀딩 기록" />
      <GoodsList />
      <ShoppingCart />
    </div>
  );
}

export default MyHistoryPage;
