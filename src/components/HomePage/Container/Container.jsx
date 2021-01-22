/* External dependencies */
import React, { Fragment, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import cookie from 'react-cookies';
/* Internal dependencies */
import styles from './Container.module.scss';
import Project from 'components/Global/Project';
import useMainData from 'hooks/useMain';
import { googleTranslate } from 'api/translateAPI';

const cx = classNames.bind(styles);

function Container() {
  const { scheduleProjectList, soonSuccessProjectList } = useMainData();

  return (
    <Fragment>
      <div className={cx('topic-container')}>
        <div className={cx('title')}>🎉Upcoming project</div>
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
        <div className={cx('title')}>🤭 Project to be accomplished soon</div>
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
