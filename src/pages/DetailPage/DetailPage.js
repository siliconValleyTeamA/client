/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './DetailPage.module.scss';

const cx = classNames.bind(styles);

function DetailPage() {
  return <div className={cx('something-local')}>디테일페이지입니다.</div>;
}

export default DetailPage;
