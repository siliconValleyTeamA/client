/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/CategoryPage/Goods';
import mockGoodsList from 'api/goodsAPI';

const cx = classNames.bind(styles);

function sortByPercent(a, b) {
  return a.percent > b.percent ? -1 : a.percent < b.percent ? 1 : 0;
}

function sortByAmount(a, b) {
  return a.amount > b.amount ? -1 : a.amount < b.amount ? 1 : 0;
}

function sortByClosing(a, b) {
  return a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0;
}

function categoryFilter(category) {
  if (category === 'all') return mockGoodsList.data;
  return mockGoodsList.data.filter(goods => goods.category === category);
}

function GoodsList({ category }) {
  const categoryToKor = {
    all: 'all',
    tech: '테크-가전',
    fashion: '패션-잡화',
  };
  const categoryData = categoryFilter(categoryToKor[category]);
  const filter = useSelector(state => state.filterReducer);
  switch (filter) {
    case 'percent':
      categoryData.sort(sortByPercent);
      break;
    case 'amount':
      categoryData.sort(sortByAmount);
      break;
    case 'closing':
      categoryData.sort(sortByClosing);
      break;
    default:
      categoryData.sort(sortByPercent);
  }
  return (
    <div className={cx('goods-list')}>
      {categoryData.map(goodsData => (
        <Goods key={goodsData.id} data={goodsData} />
      ))}
    </div>
  );
}

export default GoodsList;
