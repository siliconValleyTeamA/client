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
      <div className={cx('title')}>
        <div>Popular project</div>
        <div>Don't miss!</div>
      </div>
      <div className={cx('gradation')} />
    </div>
  );
}

export default Banner;
