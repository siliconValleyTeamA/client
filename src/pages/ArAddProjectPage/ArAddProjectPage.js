/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './ArAddProjectPage.module.scss';
import useProjectInfo from 'hooks/useProjectInfo';
import Info from 'components/ArAddProjectPage/Info';

const cx = classNames.bind(styles);

function ArAddProjectPage() {
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

export default ArAddProjectPage;
