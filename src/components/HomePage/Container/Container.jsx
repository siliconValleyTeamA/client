/* External dependencies */
import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Container.module.scss';
import Project from 'components/Global/Project';
const cx = classNames.bind(styles);

function Container() {
  return (
    <Fragment>
      <div className={cx('topic-container')}>
        <div className={cx('title')}>🎉 공개예정 프로젝트</div>
        <div className={cx('scroll-container')}>
          <div className={cx('container')}>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className={cx('shadow-right')} />
        </div>
      </div>
      <div className={cx('topic-container')}>
        <div className={cx('title')}>🤭 성공임박 프로젝트</div>
        <div className={cx('scroll-container')}>
          <div className={cx('container')}>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className={cx('shadow-right')} />
        </div>
      </div>
    </Fragment>
  );
}

export default Container;
