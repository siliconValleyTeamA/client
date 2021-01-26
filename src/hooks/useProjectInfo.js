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
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [goalMoney, setGoalMoney] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [categoryId, setCategoryId] = useState(1);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  function onTitle(event) {
    setTitle(event.currentTarget.value);
  }

  function onCompany(event) {
    setCompany(event.currentTarget.value);
  }

  function onGoalMoney(event) {
    setGoalMoney(event.currentTarget.value);
  }

  function onStartDate(event) {
    setStartDate(event.currentTarget.value);
  }

  function onEndDate(event) {
    setEndDate(event.currentTarget.value);
  }

  function onCategoryId(event) {
    setCategoryId(event.currentTarget.value);
  }

  const info = {
    title,
    company,
    goalMoney,
    startDate,
    endDate,
    categoryId,
    images,
    description,
  };
  const func = {
    onTitle,
    onCompany,
    onGoalMoney,
    onStartDate,
    onEndDate,
    onCategoryId,
  };

  return {
    Category,
    info,
    func,
  };
}

export default useProjectInfo;
