/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Mypage.module.scss';
import Menu from 'components/Mypage/Menu';
import Profile from 'components/Mypage/Profile';

const cx = classNames.bind(styles);

function Mypage() {
  return (
    <div className={cx('mypage')}>
      <Profile className={cx('profile')} />
      <Menu className={cx('menu')} />
    </div>
  );
}

export default Mypage;
