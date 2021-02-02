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
          src="https://fuding-bucket.s3.ap-northeast-2.amazonaws.com/profile.png"
          alt="profile"
        />
      </div>
      <div className={cx('user-name')}>{user?.name}</div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Profile;
