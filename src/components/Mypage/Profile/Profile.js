/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx('profile')}>
      <div className={cx('photo')}>
        <img src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg" />
      </div>
      <div className={cx('opening-ment')}>좋은 하루 되세요,</div>
      <div className={cx('user-name')}>noh gi jin님</div>
      <div className={cx('user-point')}>잔여 포인트: 10000P</div>
    </div>
  );
}

export default Profile;
