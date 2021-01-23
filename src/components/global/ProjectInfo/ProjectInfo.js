/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './ProjectInfo.module.scss';
const cx = classNames.bind(styles);

function ProjectInfo({ Category, value, func }) {
  return (
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
        <input
          type="text"
          onChange={func.onTitleChange}
          value={value.titleValue}
        />
        <input
          type="text"
          onChange={func.onCompanyTitleValue}
          value={value.companyTitleValue}
        />
        <input
          type="number"
          onChange={func.onGoalPriceValue}
          value={value.goalPriceValue}
        />
        <input
          type="date"
          onChange={func.onStartDate}
          value={value.startDate}
        />
        <input type="date" onChange={func.onEndDate} value={value.endDate} />
        <select
          onChange={func.onCategorySelectChange}
          value={value.categoryValue}
        >
          {Category.map(item => (
            <option key={item.key} value={item.key}>
              {item.value}{' '}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ProjectInfo;
