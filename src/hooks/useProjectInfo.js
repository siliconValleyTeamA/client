/* External dependencies */
import { useState } from 'react';

/* Internal dependencies */

const Category = [
  { key: 1, value: 'fashion' },
  { key: 2, value: 'beauty' },
  { key: 3, value: 'food' },
  { key: 4, value: 'homeliving' },
  { key: 5, value: 'design' },
  { key: 6, value: 'travel' },
  { key: 7, value: 'sport' },
  { key: 8, value: 'pet' },
  { key: 9, value: 'meeting' },
  { key: 10, value: 'culture' },
  { key: 11, value: 'social' },
  { key: 12, value: 'education' },
  { key: 13, value: 'game' },
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
  const [language, setLanguage] = useState('');

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
    language,
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
