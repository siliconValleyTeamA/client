/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

/* Internal dependencies */
import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project({ data, type, jjim }) {
  let id = jjim ? data.project_id : data.id;
  return (
    <Link to={`/project/${id}`}>
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
    </Link>
  );
}

export default Project;
