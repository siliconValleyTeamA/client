/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

/* Internal dependencies */
import styles from './ProjectInfo.module.scss';
import FileUpload from 'components/AddProjectPage/Fileupload';
import { createPorjectInfoAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function ProjectInfo({ Category, info, func }) {
  const createProjectInfo = () => {
    createPorjectInfoAPI(info).then(result => {
      if (result.data.success) {
        alert('상품을 성공적으로 업로드하였습니다.');
      } else {
        alert('상품을 업로드하는데 실패하였습니다.');
      }
    });
  };

  return (
    <div>
      <FileUpload refreshFunction={func.onImages} />
      <div className={cx('discription')}>
        <div className={cx('leftside')}>
          <label>프로젝트명</label>
          <label>기업명</label>
          <label>목표금액</label>
          <label>시작일</label>
          <label>종료일</label>
          <label>카테고리</label>
        </div>
        <div className={cx('rightside')}>
          <input type="text" onChange={func.onTitle} value={info.title} />
          <input type="text" onChange={func.onCompany} value={info.company} />
          <input
            type="number"
            onChange={func.onGoalMoney}
            value={info.goalMoney}
          />
          <input
            type="date"
            onChange={func.onStartDate}
            value={info.startDate}
          />
          <input type="date" onChange={func.onEndDate} value={info.endDate} />
          <select onChange={func.onCategoryId} value={info.categoryId}>
            {Category.map(item => (
              <option key={item.key} value={item.key}>
                {item.value}{' '}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Link to={`/`}>
        <button onClick={createProjectInfo}>다음</button>
      </Link>
    </div>
  );
}

export default ProjectInfo;
