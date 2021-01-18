/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CartFooter.module.scss';

const cx = classNames.bind(styles);

function CartFooter({ totalPrice }) {
  return (
    <div className={cx('cart-footer')}>
      <div className={cx('cart-footer-total-price')}>
        {totalPrice.toLocaleString()}원
      </div>
      <button className={cx('cart-footer-confirm-button')}>결제하기</button>
    </div>
  );
}

export default CartFooter;
