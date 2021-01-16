/* External dependencies */
import React, { Fragment, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Mypage.module.scss';
import Menu from 'components/Mypage/Menu';
import Profile from 'components/Mypage/Profile';
import SignoutButton from 'components/Mypage/LogoutButton';
import LoginButton from 'components/Mypage/LoginButton';
import NavigationBar from 'components/Global/NavigationBar';
import Logo from 'components/Global/Logo';
import { logOutAPI } from 'api/userAPI';

const cx = classNames.bind(styles);

function Mypage() {
  const [signIn, setSignIn] = useState(false);

  const logOut = () => {
    setSignIn(true);
    logOutAPI();
  };

  return (
    <Fragment>
      <Logo />
      <NavigationBar />
      <div className={cx('mypage')}>
        {signIn ? (
          <div className={cx('sign-in')}>
            <Profile className={cx('profile')} />
            <Menu className={cx('menu')} />
            <div onClick={logOut}>
              <SignoutButton />
            </div>
          </div>
        ) : (
          <div className={cx('sign-out')} onClick={() => setSignIn(true)}>
            <LoginButton />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Mypage;
