/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import axios from '../../api/axios';

/* Internal dependencies */
import styles from './AddProjectPage.module.scss';
import FileUpload from 'components/AddProjectPage/Fileupload';
import useProjectInfo from 'hooks/useProjectInfo';
import ProjectInfo from 'components/Global/ProjectInfo';

const cx = classNames.bind(styles);

function AddProjectPage(props) {
  const { Category, value, func } = useProjectInfo();
  const [Images, setImages] = useState([]);

  const updateImages = newImages => {
    setImages(newImages);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (
      !value.titleValue ||
      !value.companyTitleValue ||
      !value.goalPriceValue ||
      !value.startDate ||
      !value.endDate ||
      !value.categoryValue ||
      !Images
    ) {
      return alert('모든 항목을 채워주세요!');
    } else if (value.startDate > value.endDate) {
      return alert('날짜 설정을 확인해주세요!');
    }
    const variables = {
      title: value.titleValue,
      company: value.companyTitleValue,
      goalmoney: value.goalPriceValue,
      start_date: value.startDate,
      end_date: value.endDate,
      images: Images,
      category: value.categoryValue,
    };

    axios.post('/api/project/uploadproject', variables).then(result => {
      if (result.data.success) {
        alert('상품을 성공적으로 업로드하였습니다.');
        props.history.push('/');
      } else {
        alert('상품을 업로드하는데 실패하였습니다.');
      }
    });
  };

  return (
    <div className={cx('addprojectdiv')}>
      <div className={cx('titlediv')}>
        <h1 className={cx('title')}>프로젝트 업로드</h1>
      </div>
      <form onSubmit={onSubmit}>
        <FileUpload refreshFunction={updateImages} />
        <ProjectInfo Category={Category} value={value} func={func} />
        <button onClick={onSubmit}>다음</button>
      </form>
    </div>
  );
}

export default AddProjectPage;
