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
        <div>인기있는 핫한 프로젝트</div>
        <div>놓치지 마세요.</div>
      </div>
      <div className={cx('gradation')} />
    </div>
  );
}

export default Banner;
