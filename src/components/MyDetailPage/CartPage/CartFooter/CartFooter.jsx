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
        {totalPrice.toLocaleString()}$
      </div>
      <button className={cx('cart-footer-confirm-button')}>payment</button>
    </div>
  );
}

export default CartFooter;
