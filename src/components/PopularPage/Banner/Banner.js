/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Banner.module.scss';
import Img from 'images/banner.png';

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx('banner')}>
      <img className={cx('banner-img')} src={Img} alt="banner" />
    </div>
  );
}

export default Banner;
