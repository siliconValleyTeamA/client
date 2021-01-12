/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PopularPage.module.scss';
import GoodsList from 'components/CategoryPage/GoodsList';
import Banner from 'components/PopularPage/Banner';

const cx = classNames.bind(styles);

function PopularPage() {
  return (
    <div className={cx('popular-page')}>
      <Banner className={cx('banner')} />
      <GoodsList popular />
    </div>
  );
}

export default PopularPage;
