/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { AiFillGithub } from 'react-icons/ai';

/* Internal dependencies */
import styles from './LoginButton.module.scss';
const cx = classNames.bind(styles);

function LoginButton() {
  return (
    <a href={'http://localhost:8080/auth/github/'}>
      <button className={cx('login')}>
        <AiFillGithub className={cx('AiFillGithub')} />
        GitHub Login
      </button>
    </a>
  );
}

export default LoginButton;
