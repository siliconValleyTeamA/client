/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './EnAddProjectPage.module.scss';
import useProjectInfo from 'hooks/useProjectInfo';
import Info from 'components/EnAddProjectPage/Info';

const cx = classNames.bind(styles);

function EnAddProjectPage() {
  const { Category, info, func } = useProjectInfo();

  return (
    <div className={cx('addprojectdiv')}>
      <div className={cx('titlediv')}>
        <h1 className={cx('title')}>Register Project</h1>
      </div>
      <Info Category={Category} info={info} func={func} />
    </div>
  );
}

export default EnAddProjectPage;
