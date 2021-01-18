/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CartList.module.scss';
import CartGoods from 'components/MyDetailPage/CartPage/CartGoods';

const cx = classNames.bind(styles);

function CartList({ cartList }) {
  return (
    <div className={cx('cart-list')}>
      {cartList.map(cartData => (
        <CartGoods key={cartData.id} data={cartData} />
      ))}
    </div>
  );
}

export default CartList;
