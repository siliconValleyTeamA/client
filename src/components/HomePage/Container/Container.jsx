/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Container.module.scss';
import Project from 'components/Global/Project';
const cx = classNames.bind(styles);

function Container() {
  return (
    <div className={cx('topic-container')}>
      <div className={cx('title')}>🔔 공개예정 프로젝트</div>
      <div className={cx('scroll-container')}>
        <div className={cx('container')}>
          <Project />
        </div>
        <div className={cx('shadow-right')} />
      </div>
    </div>
  );
}

export default Container;
