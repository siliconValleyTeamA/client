/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

/* Internal dependencies */
import { createJjimAPI, removeJjimAPI } from 'api/jjimAPI';

import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project({ data, type, jjimType, onRemove }) {
  const [jjim, setJjim] = useState(true);
  const projectId = jjimType ? data.project_id : data.id;
  const jjimId = jjimType ? data.jjim_id : '';

  const createJjim = () => {
    setJjim(true);
    createJjimAPI({ projectId });
  };

  const removeJim = () => {
    setJjim(false);
    removeJjimAPI({ jjimId }).then(result => {
      onRemove(jjimId);
    });
  };

  if (!jjimType) {
    return (
      <Link to={`/project/${projectId}`}>
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
                {type === 'open'
                  ? data.open_left_days + '일 뒤 공개'
                  : data.percent + '% 달성'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={cx('project')}
      style={{
        backgroundImage: `url("${data.image}")`,
      }}
    >
      {jjim ? (
        <div className={cx('heart-wrapper')}>
          <AiFillHeart className={cx('AiFillHeart')} onClick={removeJim} />
        </div>
      ) : (
        <div className={cx('heart-wrapper')}>
          <AiOutlineHeart
            className={cx('AiOutlineHeart')}
            onClick={createJjim}
          />
        </div>
      )}

      <Link to={`/project/${projectId}`}>
        <div className={cx('project-info')}>
          <div className={cx('project-info-name')}>{data.title}</div>
          <div className={cx('project-info-price')}>
            <span className={cx('project-info-price-current')}>
              {data.left_days + '일 남음'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Project;
