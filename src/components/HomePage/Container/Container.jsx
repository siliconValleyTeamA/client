/* External dependencies */
import React, { useState, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Container.module.scss';
import Project from 'components/Global/Project';
import {
  getScheduleProjectListAPI,
  getSoonSuccessProjectListAPI,
} from 'api/projectAPI';

const cx = classNames.bind(styles);

function Container() {
  const [scheduleProjectList, setScheduleProjectList] = useState([]);
  const [soonSuccessProjectList, setSoonSuccessProjectList] = useState([]);

  useEffect(() => {
    getScheduleProjectListAPI().then(result => {
      console.log(result);
      setScheduleProjectList(result.data);
    });
    getSoonSuccessProjectListAPI().then(result => {
      setSoonSuccessProjectList(result.data);
    });
  }, []);

  return (
    <Fragment>
      <div className={cx('topic-container')}>
        <div className={cx('title')}>🎉 공개예정 프로젝트</div>
        <div className={cx('scroll-container')}>
          <div className={cx('container')}>
            {scheduleProjectList.map(scheduleProject => {
              return (
                <Project key={scheduleProject.id} data={scheduleProject} />
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
