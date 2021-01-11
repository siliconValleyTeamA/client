/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './SignoutButton.module.scss';

const cx = classNames.bind(styles);

function SignoutButton() {
  return <button className={cx('sign-out')}>로그아웃 하시게요? 😢</button>;
}

export default SignoutButton;
