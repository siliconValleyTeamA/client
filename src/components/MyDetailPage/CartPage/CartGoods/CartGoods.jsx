/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdRemoveShoppingCart } from 'react-icons/md';

/* Internal dependencies */
import styles from './CartGoods.module.scss';

const cx = classNames.bind(styles);

function CartGoods({ data }) {
  return (
    <div className={cx('cart-item')}>
      <Link to="/detail">
        <div className={cx('cart-item-name')}>{data.title}</div>
      </Link>
      <div className={cx('cart-item-info')}>
        <Link to="/detail">
          <div
            className={cx('cart-item-info-left')}
            style={{
              backgroundImage: `url(${data.img})`,
            }}
          ></div>
        </Link>
        <div className={cx('cart-item-info-right')}>
          <input className={cx('cart-item-input')} />
          <div className={cx('price')}>{data.amount}</div>
          <div className={cx('delete')}>
            <div className={cx('delete-icon')}>
              <MdRemoveShoppingCart className={cx('MdRemoveShoppingCart')} />
            </div>
            <span className={cx('delete-description')}>삭제</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartGoods;
