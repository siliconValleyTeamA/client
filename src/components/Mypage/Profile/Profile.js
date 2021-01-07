/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { BiPhotoAlbum } from 'react-icons/bi';

/* Internal dependencies */
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx('profile')}>
      <div className={cx('photo')}>사진이 들어갈 자리입니다.</div>
      <div className={cx('opening-ment')}>좋은 하루 되세요,</div>
      <div className={cx('user-name')}>noh gi jin님</div>
      <div className={cx('user-point')}>잔여 포인트: 10000P</div>
    </div>
  );
}

export default Profile;
