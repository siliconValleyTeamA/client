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
import Homebtn from 'components/Global/HomeButton';

const cx = classNames.bind(styles);

function MyCartPage() {
  const { cartList, onModify, onRemove, totalPrice, handleTotalPrice, checkedList } = useCart();
  return (
    <div className={cx('mycart-page')}>
      <BackButton />
      <FaShoppingCart className={cx('FaShoppingCart')} />
      <Header header="Funding Cart" />
      <CartList 
        cartList={cartList} 
        onModify={onModify} 
        onRemove={onRemove} 
        handleTotalPrice={handleTotalPrice} 
      />
      <CartFooter totalPrice={totalPrice} checkedList={checkedList} onRemove={onRemove}  />
      <Homebtn></Homebtn>
    </div>
  );
}

export default MyCartPage;
