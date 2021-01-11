/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Goods.module.scss';

const cx = classNames.bind(styles);

function Goods({ data }) {
  let width = data.percent > 100 ? 100 : data.percent;

  return (
    <button>
      <Link to="/detail">
        <div className={cx('goods')}>
          <div className={cx('goods-img')}>
            <img
              src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
              alt="goods-detail"
            />
          </div>
          <div className={cx('goods-non-img')}>
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
              </div>
              <div>
                <span>{data.dueDate}일 남음</span>
              </div>
            </div>
            <div className={cx('goods-money')}>
              <span>
                {data.isSponsored ? '펀딩한 금액 ' : '현재 달성 금액 '}
                {data.isSponsored
                  ? data.spon.toLocaleString()
                  : data.amount.toLocaleString()}
                원
              </span>
            </div>
          </div>
        </div>
      </Link>
    </button>
  );
}

export default Goods;