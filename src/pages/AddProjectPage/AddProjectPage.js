/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import axios from '../../api/axios';

/* Internal dependencies */
import styles from './AddProjectPage.module.scss';
import FileUpload from 'components/AddProjectPage/Fileupload';
import useProjectInfo from 'hooks/useProjectInfo';

const cx = classNames.bind(styles);

function AddProjectPage(props) {
  const {
    Category,
    titleValue,
    companyTitleValue,
    goalPriceValue,
    startDate,
    endDate,
    categoryValue,
    onTitleChange,
    onCompanyTitleValue,
    onGoalPriceValue,
    onStartDate,
    onEndDate,
    onCategorySelectChange,
  } = useProjectInfo();

  const [Images, setImages] = useState([]);

  const updateImages = newImages => {
    setImages(newImages);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (
      !titleValue ||
      !companyTitleValue ||
      !goalPriceValue ||
      !startDate ||
      !endDate ||
      !categoryValue ||
      !Images
    ) {
      return alert('모든 항목을 채워주세요!');
    } else if (startDate > endDate) {
      return alert('날짜 설정을 확인해주세요!');
    }
    const variables = {
      title: titleValue,
      company: companyTitleValue,
      goalmoney: goalPriceValue,
      start_date: startDate,
      end_date: endDate,
      images: Images,
      category: categoryValue,
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
        <br />
        <br />
        <div className={cx('discription')}>
          <div className={cx('leftside')}>
            <label>프로젝트명</label>
            <label>기업명</label>
            <label>목표금액</label>
            <label>시작일</label>
            <label>종료일</label>
            <label>프로젝트 설명</label>
            <label>카테고리</label>
          </div>
          <div className={cx('rightside')}>
            <input type="text" onChange={onTitleChange} value={titleValue} />
            <br />
            <input
              type="text"
              onChange={onCompanyTitleValue}
              value={companyTitleValue}
            />
            <br />
            <input
              type="number"
              onChange={onGoalPriceValue}
              value={goalPriceValue}
            />
            <br />
            <input type="date" onChange={onStartDate} value={startDate} />
            <br />
            <input type="date" onChange={onEndDate} value={endDate} />
            <br />
            <select onChange={onCategorySelectChange} value={categoryValue}>
              <br />
              {Category.map(item => (
                <option key={item.key} value={item.key}>
                  {item.value}{' '}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={onSubmit}>다음</button>
      </form>
    </div>
  );
}

export default AddProjectPage;
