/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project({ data, type }) {
  return (
    <div
      className={cx('project')}
      style={{
        backgroundImage: `url("${data.image}")`,
      }}
    >
      <div className={cx('project-info')}>
        <div className={cx('project-info-name')}>{data.title}</div>
        <div className={cx('project-info-price')}>
          <span className={cx('project-info-price-current')}>
            {type === 'open' ? data.open_left_days : data.percent}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
