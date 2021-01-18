/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyCartPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import CartList from 'components/MyDetailPage/CartPage/CartList';
import CartFooter from 'components/MyDetailPage/CartPage/CartFooter';
import { FaShoppingCart } from 'react-icons/fa';
import { getProjectListInCartAPI } from 'api/cartAPI';

const cx = classNames.bind(styles);

function MyCartPage() {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    getProjectListInCartAPI().then(result => {
      setCartList(result.data);
      setTotalPrice(
        result.data.reduce((prev, curr) => prev.money + curr.money),
      );
    });
  }, []);

  return (
    <div className={cx('mycart-page')}>
      <BackButton />
      <FaShoppingCart className={cx('FaShoppingCart')} />
      <Header header="펀딩 장바구니" />
      <CartList cartList={cartList} />
      <CartFooter totalPrice={totalPrice} />
    </div>
  );
}

export default MyCartPage;
