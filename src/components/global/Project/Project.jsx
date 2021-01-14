/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project({ data }) {
  
  return (
    <div
      className={cx('project')}
      style={{
        backgroundImage: `url("${data.img}")`,
      }}
    >
      <div className={cx('project-info')}>
        <div className={cx('project-info-name')}>{data.title}</div>
        <div className={cx('project-info-price')}>
          <span className={cx('project-info-price-current')}>
            {data.percent}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
