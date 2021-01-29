/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CartFooter.module.scss';
import { removeCartAPI } from 'api/cartAPI';
import axios from 'api/axios';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartFooter({ totalPrice, checkedList }) {
  const history = useHistory();
  function payment(list, IMP, pg, pay_method, name, amount) {
    IMP.request_pay({
      pg: pg, // version 1.1.0부터 지원.
      pay_method: pay_method,
      name: name,
      amount: amount,
    }, function (rsp) {
      if (rsp.success) {
        var msg = '결제가 완료되었습니다. ';
        msg += '결제 금액 : ' + rsp.paid_amount;
        list.map(cartId => axios.post(`/api/user/investment`, { cartId }));
        list.map(cartId => removeCartAPI({ cartId }));
        history.push('/');
      } else {
        var msg = '결제에 실패하였습니다. ';
        msg += '에러내용 : ' + rsp.error_msg;
      }
      alert(msg);
    })
  }
  var IMP = window.IMP;
  IMP.init('imp30332477');
  return (
    <div className={cx('cart-footer')}>

      <div className={cx('cart-footer-total-price')}>
        {totalPrice.toLocaleString()}$
      </div>
      <br></br>
      <button className={cx('cart-footer-confirm-button')} onClick={() => payment(checkedList, IMP, 'inicis', 'card', '구매 상품', totalPrice)}
      >결제하기</button>
    </div>
  );
}
export default CartFooter;
