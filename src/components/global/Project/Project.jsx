/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project() {
  return (
    <div
      className={cx('project')}
      style={{
        backgroundImage: `url("https://img-cf.kurly.com/shop/data/goods/1591167269671l0.jpg")`,
      }}
    >
      <div className={cx('project-info')}>
        <div className={cx('project-info-name')}>
          [비플레인] 녹두 약산성 클렌징 폼 80ml
        </div>
        <div className={cx('project-info-price')}>
          <span className={cx('project-info-price-current')}>22,000원</span>
        </div>
      </div>
    </div>
  );
}

export default Project;
