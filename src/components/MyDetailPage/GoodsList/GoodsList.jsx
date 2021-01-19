/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MyDetailPage/Goods';
import useHistory from 'hooks/useHistory';

const cx = classNames.bind(styles);

function GoodsList() {
  const historyList = useHistory();
  
  return (
    <div className={cx('goods-list')}>
      {historyList.map(history => (
        <Goods key={history.id} data={history} />
      ))}
    </div>
  );
}

export default GoodsList;
