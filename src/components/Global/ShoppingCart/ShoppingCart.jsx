/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { HiShoppingCart } from 'react-icons/hi';

/* Internal dependencies */
import styles from './ShoppingCart.module.scss';
const cx = classNames.bind(styles);

function ShoppingCart() {
  return (
    <Link to="/mypage/cart">
      <button className={cx('cart-shortcut')}>
        <HiShoppingCart className={cx('HiShoppingCart')} />
      </button>
    </Link>
  );
}

export default ShoppingCart;
