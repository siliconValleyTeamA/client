/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Goods.module.scss';
import Img from 'images/goods.jpeg';

const cx = classNames.bind(styles);

function Goods({ data }) {
  let width = 0;

  if (data.percent > 100) {
    width = 100;
  } else {
    width = data.percent;
  }

  return (
    <div className={cx('goods')}>
      <div className={cx('goods-img')}>
        <img src={Img} alt="goods-detail" />
      </div>
      <div className={cx('goods-title')}>
        <h3> {data.title} </h3>
      </div>
      <div className={cx('goods-catecory-company')}>
        <span> {data.category} </span>
        <span> | </span>
        <span> {data.company}</span>
      </div>
      <div>
        <div
          className={cx('goods-progressbar')}
          style={{ width: `${width}%` }}
        />
      </div>
      <div className={cx('goods-progressinfo')}>
        <div className={cx('goods-progressinfo-percent')}>
          <p>{data.percent}%</p>
          <span>・ {data.amount}원</span>
        </div>
        <div>
          <span>{data.dueDate}일 남음</span>
        </div>
      </div>
    </div>
  );
}

export default Goods;
