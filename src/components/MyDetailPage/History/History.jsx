/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './History.module.scss';
const cx = classNames.bind(styles);

function History({ data }) {
  const detailLink = '/project/' + data.project_id;
  return (
    <button>
      <Link to={`/project/${projectId}`}>
        <div className={cx('goods')}>
          <div className={cx('goods-img')}>
            <img
              src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
              alt="goods-detail"
            />
          </div>
          <div className={cx('goods-non-img')}>
            <div className={cx('goods-title')}>
              <h2> {data.title} </h2>
            </div>

            <div className={cx('goods-money')}>
              <span>
                펀딩한 금액
                {data.money.toLocaleString()}원
              </span>
            </div>
          </div>
        </div>
      </Link>
    </button>
  );
}

export default History;
