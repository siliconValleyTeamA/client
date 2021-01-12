/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Hit.module.scss';
const cx = classNames.bind(styles);

function Hit() {
  return <div className={cx('hit')}>인기</div>;
}

export default Hit;
