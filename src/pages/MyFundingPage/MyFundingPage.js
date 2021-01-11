/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyFundingPage.module.scss';
import Header from 'components/MyDetailPage/Header';
import GoodsList from 'components/MyDetailPage/GoodsList';

const cx = classNames.bind(styles);

function MyFundingPage() {
  return (
    <div className={cx('myfunding-page')}>
      <Header header="나의 펀딩 리스트" />
      <GoodsList show="funding" />
    </div>
  );
}

export default MyFundingPage;
