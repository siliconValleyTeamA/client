/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CartList.module.scss';
import CartGoods from 'components/MyDetailPage/CartPage/CartGoods';
import mockCartList from 'api/cartAPI';

const cx = classNames.bind(styles);

function sortByCartTime(a, b) {
  return a.cart_date.getTime() > b.cart_date.getTime()
    ? -1
    : a.cart_date.getTime() < b.cart_date.getTime()
    ? 1
    : 0;
}
function CartList() {
  return (
    <div className={cx('cart-list')}>
      {/* {mockCartList.data.sort(sortByCartTime).map(cartData => (
        <CartGoods key={cartData.id} data={cartData} />
      ))} */}
    </div>
  );
}

export default CartList;
