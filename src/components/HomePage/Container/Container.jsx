/* External dependencies */
import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Container.module.scss';
import Project from 'components/Global/Project';
import useMainData from 'hooks/useMain';

const cx = classNames.bind(styles);

function Container() {
  const { scheduleProjectList, soonSuccessProjectList } = useMainData();
  return (
    <Fragment>
      <div className={cx('topic-container')}>
        <div className={cx('title')}>🎉 공개예정 프로젝트</div>
        <div className={cx('scroll-container')}>
          <div className={cx('container')}>
            {scheduleProjectList.map(scheduleProject => {
              return (
                <Project
                  key={scheduleProject.id}
                  data={scheduleProject}
                  type="open"
                />
              );
            })}
          </div>
          <div className={cx('shadow-right')} />
        </div>
      </div>
      <div className={cx('topic-container')}>
        <div className={cx('title')}>🤭 성공임박 프로젝트</div>
        <div className={cx('scroll-container')}>
          <div className={cx('container')}>
            {soonSuccessProjectList.map(soonSuccessProject => {
              return (
                <Project
                  key={soonSuccessProject.id}
                  data={soonSuccessProject}
                  type="success"
                />
              );
            })}
          </div>
          <div className={cx('shadow-right')} />
        </div>
      </div>
    </Fragment>
  );
}

export default Container;
