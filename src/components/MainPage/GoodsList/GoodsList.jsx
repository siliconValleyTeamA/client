/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MainPage/Goods';
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

function GoodsList() {
  const filter = useSelector(state => state.filterReducer);
  switch (filter) {
    case 'percent':
      mockGoodsList.data.sort(sortByPercent);
      break;
    case 'amount':
      mockGoodsList.data.sort(sortByAmount);
      break;
    case 'closing':
      mockGoodsList.data.sort(sortByClosing);
      break;
    default:
      mockGoodsList.data.sort(sortByPercent);
  }
  return (
    <div className={cx('goods-list')}>
      {mockGoodsList.data.map(goodsData => (
        <Goods key={goodsData.id} data={goodsData} />
      ))}
    </div>
  );
}

export default GoodsList;
