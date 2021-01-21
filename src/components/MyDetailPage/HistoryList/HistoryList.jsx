/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './HistoryList.module.scss';
import History from 'components/MyDetailPage/History';
const cx = classNames.bind(styles);

function HistoryList({ historyList }) {
  return (
    <div className={cx('history-list')}>
      {historyList.map(history => (
        <History key={history.id} data={history} />
      ))}
    </div>
  );
}

export default HistoryList;
