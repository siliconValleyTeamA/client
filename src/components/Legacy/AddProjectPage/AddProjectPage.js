/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './AddProjectPage.module.scss';
import useProjectInfo from 'hooks/useProjectInfo';
import ProjectInfo from 'components/Global/ProjectInfo';
import UsaDescription from 'components/AddProjectPage/UsaDescription';

const cx = classNames.bind(styles);

function AddProjectPage() {
  const { Category, info, func } = useProjectInfo();

  return (
    <div className={cx('addprojectdiv')}>
      <div className={cx('titlediv')}>
        <h1 className={cx('title')}>프로젝트 업로드</h1>
      </div>
      <ProjectInfo Category={Category} info={info} func={func} />
      <UsaDescription Category={Category} info={info} func={func} />
    </div>
  );
}

export default AddProjectPage;
