/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getProjectListInCartAPI } from 'api/cartAPI';

function useCart() {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkedList, setChecked]= useState([]);
  useEffect(() => {
    handleCartList();
  }, []);

  const handleTotalPrice = (event, price , id) => {
    if(event.target.checked) {
      setTotalPrice(0);
      setTotalPrice(totalPrice + price);
      setChecked([
        ...checkedList,id
      ]);  
      return;
    }   
    setChecked(checkedList.filter(item => item!==id))
    setTotalPrice(totalPrice - price);
  }

  const handleCartList = function () {
    getProjectListInCartAPI().then(result => {
      setCartList(result.data);
    });
  };

  function onModify(cart_id) {        
    handleCartList();
    // handleTotalPrice();
  }

  function onRemove(cart_id) {
    setCartList(cartList.filter(cart => cart.cart_id !== cart_id));
    // handleTotalPrice();
  }

  return { cartList, onModify, onRemove, totalPrice, handleTotalPrice, checkedList};
}

export default useCart;
