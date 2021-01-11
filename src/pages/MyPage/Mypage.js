/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Mypage.module.scss';
import Menu from 'components/Mypage/Menu';
import Profile from 'components/Mypage/Profile';
import SignoutButton from 'components/Mypage/SignoutButton';
import LoginButton from 'components/Mypage/LoginButton';

const cx = classNames.bind(styles);

function Mypage() {
  const signIn = true;
  return (
    <div className={cx('mypage')}>
      {signIn ? (
        <div className={cx('sign-in')}>
          <Profile className={cx('profile')} />
          <Menu className={cx('menu')} />
          <SignoutButton />
        </div>
      ) : (
        <div className={cx('sign-out')}>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default Mypage;
