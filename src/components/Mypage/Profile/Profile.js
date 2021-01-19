/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Profile.module.scss';
import usePoint from 'hooks/usePoint';

const cx = classNames.bind(styles);

function Profile() {
  const point = usePoint();

  return (
    <div className={cx('profile')}>
      <div className={cx('photo')}>
        <img
          src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
          alt="profile"
        />
      </div>
      <div className={cx('user-name')}>Noh Gi Jin님</div>
      <div className={cx('user-point')}>
        잔여 포인트: {point.toLocaleString()} 원
      </div>
    </div>
  );
}

export default Profile;
