/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MyDetailPage/Goods';
import mockUserList from 'api/userAPI';

const cx = classNames.bind(styles);

function GoodsList(props) {
  return (
    <div className={cx('goods-list')}>
      {props.show == 'funding'
        ? mockUserList.data
            .filter(data => data.isSponsored == true)
            .map(goodsData => <Goods key={goodsData.id} data={goodsData} />)
        : mockUserList.data
            .filter(data => data.isJjimed == true)
            .map(goodsData => <Goods key={goodsData.id} data={goodsData} />)}
    </div>
  );
}

export default GoodsList;
