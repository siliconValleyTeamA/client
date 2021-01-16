/* External dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdRemoveShoppingCart } from 'react-icons/md';

/* Internal dependencies */
import styles from './CartGoods.module.scss';
import { modifyCartAPI, removeCartAPI } from 'api/cartAPI';

const cx = classNames.bind(styles);

function CartGoods({ data }) {
  const [point, setPoint] = useState('');
  const cartId = data.cart_id;

  const modifyCart = () => {
    modifyCartAPI({ cartId, point });
  };

  const removeCart = () => {
    removeCartAPI({ cartId });
  };

  return (
    <div className={cx('cart-item')}>
      <Link to={`/project/${data.project_id}`}>
        <div className={cx('cart-item-name')}>{data.title}</div>
      </Link>
      <div className={cx('cart-item-info')}>
        <Link to={`/project/${data.project_id}`}>
          <div
            className={cx('cart-item-info-left')}
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          ></div>
        </Link>
        <div className={cx('cart-item-info-right')}>
          <input
            type="text"
            className={cx('cart-item-input')}
            placeholder="금액입력"
            value={point}
            onChange={e => {
              setPoint(
                e.target.value
                  ? parseInt(e.target.value.replace(/,/g, '')).toLocaleString()
                  : '',
              );
            }}
          />
          <div className={cx('price')}>{data.money}</div>
          <div className={cx('modify')}>
            <div className={cx('modify-icon')}>
              <MdRemoveShoppingCart className={cx('MdRemoveShoppingCart')} />
            </div>
            <span className={cx('modify-description')} onClick={modifyCart}>
              수정
            </span>
          </div>
          <div className={cx('delete')}>
            <div className={cx('delete-icon')}>
              <MdRemoveShoppingCart className={cx('MdRemoveShoppingCart')} />
            </div>
            <span className={cx('delete-description')} onClick={removeCart}>
              삭제
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartGoods;
