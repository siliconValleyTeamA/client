/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getProjectListInCartAPI } from 'api/cartAPI';

function useCart() {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    handleCartList();
  }, []);

  useEffect(() => {
    getTotalPrice();
  }, [cartList]);

  const getTotalPrice = function () {
    let cartPrice = 0;
    cartList.forEach(cart => {
      cartPrice += cart.money;
    });
    setTotalPrice(cartPrice);
  };

  const handleCartList = function () {
    getProjectListInCartAPI().then(result => {
      setCartList(result.data);
    });
  };

  function onModify(cart_id) {
    handleCartList();
  }

  function onRemove(cart_id) {
    setCartList(cartList.filter(cart => cart.cart_id !== cart_id));
    getTotalPrice();
  }

  console.log(totalPrice);

  return { cartList, onModify, onRemove, totalPrice };
}

export default useCart;
