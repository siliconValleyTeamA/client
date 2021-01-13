/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CartFooter.module.scss';

const cx = classNames.bind(styles);

function CartFooter() {
  return (
    <div className={cx('cart-footer')}>
      <div className={cx('cart-footer-total-price')}>101023원</div>
      <button className={cx('cart-footer-confirm-button')}>결제하기</button>
    </div>
  );
}

export default CartFooter;
