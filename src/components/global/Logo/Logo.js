/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

function Logo() {
  return (
    <Link to="/">
      <div className={cx('logo')}>
        <img
          className={cx('logo-img')}
          src="https://fuding-bucket.s3.ap-northeast-2.amazonaws.com/main.png"
          alt="logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
