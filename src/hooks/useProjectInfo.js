/* External dependencies */
import { useState } from 'react';

/* Internal dependencies */

const Category = [
  { key: 1, value: '패션-잡화' },
  { key: 2, value: '뷰티' },
  { key: 3, value: '푸드' },
  { key: 4, value: '홈리빙' },
  { key: 5, value: '디자인소품' },
  { key: 6, value: '여행-레저' },
  { key: 7, value: '스포츠-모빌리티' },
  { key: 8, value: '반려동물' },
  { key: 9, value: '모임' },
  { key: 10, value: '공연-컬쳐' },
  { key: 11, value: '소셜-캠페인' },
  { key: 12, value: '교육-키즈' },
  { key: 13, value: '게임-취미' },
];

function useProjectInfo() {
  const [titleValue, setTitleValue] = useState('');
  const [companyTitleValue, setCompanyTitleValue] = useState('');
  const [goalPriceValue, setGoalPriceValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [categoryValue, setCategoryValue] = useState(1);

  function onTitleChange(event) {
    setTitleValue(event.currentTarget.value);
  }

  function onCompanyTitleValue(event) {
    setCompanyTitleValue(event.currentTarget.value);
  }

  function onGoalPriceValue(event) {
    setGoalPriceValue(event.currentTarget.value);
  }

  function onStartDate(event) {
    setStartDate(event.currentTarget.value);
  }

  function onEndDate(event) {
    setEndDate(event.currentTarget.value);
  }

  function onCategorySelectChange(event) {
    setCategoryValue(event.currentTarget.value);
  }

  const value = {
    titleValue,
    companyTitleValue,
    goalPriceValue,
    startDate,
    endDate,
    categoryValue,
  };
  const func = {
    onTitleChange,
    onCompanyTitleValue,
    onGoalPriceValue,
    onStartDate,
    onEndDate,
    onCategorySelectChange,
  };

  return {
    Category,
    value,
    func,
  };
}

export default useProjectInfo;
