/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CartList.module.scss';
import CartGoods from 'components/MyDetailPage/CartPage/CartGoods';
import { getProjectListInCartAPI } from 'api/cartAPI';

const cx = classNames.bind(styles);

function CartList() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getProjectListInCartAPI().then(result => {
      setProjectList(result.data);
    });
  }, []);

  return (
    <div className={cx('cart-list')}>
      {projectList.map(cartData => (
        <CartGoods key={cartData.id} data={cartData} />
      ))}
    </div>
  );
}

export default CartList;
