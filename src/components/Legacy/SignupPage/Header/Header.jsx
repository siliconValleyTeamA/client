/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('header')}>
      <h1>회원가입</h1>
    </div>
  );
}

export default Header;
