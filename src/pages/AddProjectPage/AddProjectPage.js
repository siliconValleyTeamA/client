/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './AddProjectPage.module.scss';
import FileUpload from 'components/AddProjectPage/Fileupload';
import useProjectInfo from 'hooks/useProjectInfo';
import ProjectInfo from 'components/Global/ProjectInfo';

const cx = classNames.bind(styles);

function AddProjectPage() {
  const { Category, value, func } = useProjectInfo();
  const [Images, setImages] = useState([]);

  const updateImages = newImages => {
    setImages(newImages);
  };

  return (
    <div className={cx('addprojectdiv')}>
      <div className={cx('titlediv')}>
        <h1 className={cx('title')}>프로젝트 업로드</h1>
      </div>
      <FileUpload refreshFunction={updateImages} />
      <ProjectInfo Category={Category} value={value} func={func} />
    </div>
  );
}

export default AddProjectPage;
