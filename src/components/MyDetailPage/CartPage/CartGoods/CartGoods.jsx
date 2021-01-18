/* External dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';

/* Internal dependencies */
import styles from './CartGoods.module.scss';
import { modifyCartAPI, removeCartAPI } from 'api/cartAPI';

const cx = classNames.bind(styles);

function CartGoods({ data, update }) {
  const [point, setPoint] = useState('');
  const cartId = data.cart_id;

  const modifyCart = () => {
    modifyCartAPI({ cartId, point }).then(result => {
      update();
    });
  };

  const removeCart = () => {
    removeCartAPI({ cartId }).then(result => {
      update();
    });
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
            placeholder="수정 금액 입력"
            value={point}
            onChange={e => {
              setPoint(
                e.target.value
                  ? parseInt(e.target.value.replace(/,/g, '')).toLocaleString()
                  : '',
              );
            }}
          />
          <div className={cx('price')}>{data.money.toLocaleString()}원</div>
          <div className={cx('wrap')}>
            <div className={cx('modify')} onClick={modifyCart}>
              <div className={cx('modify-icon')}>
                <FaCoins className={cx('FaCoins')} />
              </div>
              <span className={cx('modify-description')}>수정</span>
            </div>
            <div className={cx('delete')} onClick={removeCart}>
              <div className={cx('delete-icon')}>
                <MdRemoveShoppingCart className={cx('MdRemoveShoppingCart')} />
              </div>
              <span className={cx('delete-description')}>삭제</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartGoods;
