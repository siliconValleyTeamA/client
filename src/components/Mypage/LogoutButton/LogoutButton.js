/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './LogoutButton.module.scss';

const cx = classNames.bind(styles);

function LogoutButton() {
  return <button className={cx('sign-out')}>로그아웃 하시게요? 😢</button>;
}

export default LogoutButton;
