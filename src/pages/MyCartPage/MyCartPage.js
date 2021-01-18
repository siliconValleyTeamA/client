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
  let cartPrice = 0;

  useEffect(() => {
    update();
  }, []);

  const update = function () {
    getProjectListInCartAPI().then(result => {
      setCartList(result.data);
      result.data.forEach(cart => {
        cartPrice += cart.money;
      });
      setTotalPrice(cartPrice);
    });
  };

  return (
    <div className={cx('mycart-page')}>
      <BackButton />
      <FaShoppingCart className={cx('FaShoppingCart')} />
      <Header header="펀딩 장바구니" />
      <CartList cartList={cartList} update={update} />
      <CartFooter totalPrice={totalPrice} />
    </div>
  );
}

export default MyCartPage;
