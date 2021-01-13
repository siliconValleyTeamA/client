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

const cx = classNames.bind(styles);

function MyCartPage() {
  return (
    <div className={cx('mycart-page')}>
      <BackButton />
      <FaShoppingCart className={cx('FaShoppingCart')} />
      <Header header="펀딩 장바구니" />
      <CartList />
      <CartFooter />
    </div>
  );
}

export default MyCartPage;
