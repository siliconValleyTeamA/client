/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MyDetailPage/Goods';
import mockJjimList from 'api/jjimAPI';
import mocHistoryList from 'api/historyAPI';

const cx = classNames.bind(styles);

function sortByJjimTime(a, b) {
  return a.jjim_date.getTime() > b.jjim_date.getTime()
    ? -1
    : a.jjim_date.getTime() < b.jjim_date.getTime()
    ? 1
    : 0;
}

function sortByHistoryTime(a, b) {
  return a.history_date.getTime() > b.history_date.getTime()
    ? -1
    : a.history_date.getTime() < b.history_date.getTime()
    ? 1
    : 0;
}

function GoodsList(props) {
  return (
    <div className={cx('goods-list')}>
      {props.show === 'funding'
        ? mocHistoryList.data
            .sort(sortByHistoryTime)
            .map(historyData => (
              <Goods key={historyData.id} data={historyData} />
            ))
        : mockJjimList.data
            .sort(sortByJjimTime)
            .map(jjimData => <Goods key={jjimData.id} data={jjimData} />)}
    </div>
  );
}

export default GoodsList;
