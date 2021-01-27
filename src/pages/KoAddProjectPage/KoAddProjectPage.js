/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './KoAddProjectPage.module.scss';
import useProjectInfo from 'hooks/useProjectInfo';
import Info from 'components/KoAddProjectPage/Info';

const cx = classNames.bind(styles);

function KoAddProjectPage() {
  const { Category, info, func } = useProjectInfo();

  return (
    <div className={cx('addprojectdiv')}>
      <div className={cx('titlediv')}>
        <h1 className={cx('title')}>프로젝트 등록하기</h1>
      </div>
      <Info Category={Category} info={info} func={func} />
    </div>
  );
}

export default KoAddProjectPage;
