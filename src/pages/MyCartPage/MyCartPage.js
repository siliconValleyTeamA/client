/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyCartPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import CartList from 'components/MyDetailPage/CartPage/CartList';
import CartFooter from 'components/MyDetailPage/CartPage/CartFooter';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from 'hooks/useCart';

const cx = classNames.bind(styles);

function MyCartPage() {
  const { cartList, onModify, onRemove, totalPrice } = useCart();
  return (
    <div className={cx('mycart-page')}>
      <BackButton />
      <FaShoppingCart className={cx('FaShoppingCart')} />
      <Header header="펀딩 장바구니" />
      <CartList cartList={cartList} onModify={onModify} onRemove={onRemove} />
      <CartFooter totalPrice={totalPrice} />
    </div>
  );
}

export default MyCartPage;
