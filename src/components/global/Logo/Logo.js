/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Logo.module.scss';
import Img from 'images/logo.jpeg';

const cx = classNames.bind(styles);

function Logo() {
  return (
    <Link to="/">
      <div className={cx('logo')}>
        <img className={cx('logo-img')} src={Img} alt="logo" />
      </div>
    </Link>
  );
}

export default Logo;
