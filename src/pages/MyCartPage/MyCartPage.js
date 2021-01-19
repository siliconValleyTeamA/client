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
    handleCartList();
  }, []);

  const handleCartList = function () {
    getProjectListInCartAPI().then(result => {
      setCartList(result.data);
      result.data.forEach(cart => {
        cartPrice += cart.money;
      });
      setTotalPrice(cartPrice);
    });
  };

  function onModify(cart_id) {
    handleCartList();
  }

  function onRemove(cart_id) {
    setCartList(cartList.filter(cart => cart.cart_id !== cart_id));
  }

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
