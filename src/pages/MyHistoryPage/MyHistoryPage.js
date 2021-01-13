/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyHistoryPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import GoodsList from 'components/MyDetailPage/GoodsList';
import { RiShoppingBag3Fill } from 'react-icons/ri';

const cx = classNames.bind(styles);

function MyHistoryPage() {
  return (
    <div className={cx('myhistory-page')}>
      <BackButton />
      <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
      <Header header="내가 펀딩한 프로젝트" />
      <GoodsList show="history" />
    </div>
  );
}

export default MyHistoryPage;
