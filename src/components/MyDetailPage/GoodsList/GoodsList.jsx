/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MyDetailPage/Goods';
import { getJjimListAPI } from 'api/jjimAPI';
import { getHistoryAPI } from 'api/userAPI';

const cx = classNames.bind(styles);

function GoodsList(props) {
  const [historyList, setHistoryList] = useState([]);
  const [jjimList, setJjimList] = useState([]);
  useEffect(() => {
    getJjimListAPI().then(result => {
      setJjimList(result.data);
    });
  }, []);

  useEffect(() => {
    getHistoryAPI().then(result => {
      setHistoryList(result.data);
    });
  }, []);

  return (
    <div className={cx('goods-list')}>
      {historyList.map(history => (
        <Goods data={history} type="history" />
      ))}
    </div>
  );
}

export default GoodsList;
