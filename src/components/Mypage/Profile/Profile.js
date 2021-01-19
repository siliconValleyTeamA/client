/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Profile.module.scss';
import useUser from 'hooks/useUser';

const cx = classNames.bind(styles);

function Profile() {
  const user = useUser();

  return (
    <div className={cx('profile')}>
      <div className={cx('photo')}>
        <img
          src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
          alt="profile"
        />
      </div>
      <div className={cx('user-name')}>{user?.name}님</div>
      <div className={cx('user-point')}>
        잔여 포인트: {user?.point.toLocaleString()} 원
      </div>
    </div>
  );
}

export default Profile;
