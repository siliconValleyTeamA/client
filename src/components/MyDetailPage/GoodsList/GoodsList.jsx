/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MyDetailPage/Goods';

import { getHistoryAPI } from 'api/historyAPI';

const cx = classNames.bind(styles);

function GoodsList(props) {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    getHistoryAPI().then(result => {
      setHistoryList(result.data);
    });
  }, []);

  return (
    <div className={cx('goods-list')}>
      {historyList.map(history => (
        <Goods key={history.id} data={history} />
      ))}
    </div>
  );
}

export default GoodsList;
