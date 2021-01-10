/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PopularPage.module.scss';

const cx = classNames.bind(styles);

function PopularPage() {
  return (
    <div className={cx('popularpage')}>
      인기상품페이지
    </div>
  );
}

export default PopularPage;
