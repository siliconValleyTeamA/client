/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Goods.module.scss';

const cx = classNames.bind(styles);

function Goods({ data }) {
  let width = data.percent > 100 ? 100 : data.percent;
  width = 100;
  const detailLink = '/detail/' + data.id;

  return (
    <div className={cx('goods')}>
      <Link to={detailLink}>
        <div className={cx('goods-img')}>
          <img
            src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
            alt="goods-detail"
          />
        </div>
        <h3 className={cx('goods-title')}> {data.title} </h3>
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
            <p>100%</p>
            <span>・ adsf원</span>
          </div>
          <div>
            <span>일 남음</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Goods;
