/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { AiFillGithub } from 'react-icons/ai';

/* Internal dependencies */
import styles from './LoginButton.module.scss';

const cx = classNames.bind(styles);

function LoginButton() {
  return (
    <button className={cx('login')}>
      <AiFillGithub className={cx('AiFillGithub')}/>
      GitHub으로 로그인
    </button>
  );
}

export default LoginButton;
