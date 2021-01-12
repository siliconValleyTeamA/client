/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Mypage.module.scss';
import Menu from 'components/Mypage/Menu';
import Profile from 'components/Mypage/Profile';
import SignoutButton from 'components/Mypage/SignoutButton';
import LoginButton from 'components/Mypage/LoginButton';
import NavigationBar from 'components/Global/NavigationBar';

const cx = classNames.bind(styles);

function Mypage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div>
      <NavigationBar />
      <div className={cx('mypage')}>
        {signIn ? (
          <div className={cx('sign-in')}>
            <Profile className={cx('profile')} />
            <Menu className={cx('menu')} />
            <div onClick={() => setSignIn(false)}>
              <SignoutButton />
            </div>
          </div>
        ) : (
          <div className={cx('sign-out')} onClick={() => setSignIn(true)}>
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Mypage;
