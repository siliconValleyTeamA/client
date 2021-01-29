/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Investment.module.scss';
const cx = classNames.bind(styles);

function Investment({ data }) {
  const image = data.image.split('&')[0];
  return (
    <div>
      <div className={cx('goods')}>
        <div
          className={cx('goods-img')}
        > <img src={image}></img></div>
        <div className={cx('goods-non-img')}>
          <div className={cx('goods-title')}>
            <h2> {data.title} </h2>
          </div>

          <div className={cx('goods-money')}>
            <span>
              Funded amount&ensp;
                {data.money.toLocaleString()}$
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
