/* External dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdRemoveShoppingCart, MdSettingsInputSvideo } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';

/* Internal dependencies */
import styles from './CartGoods.module.scss';
import { modifyCartAPI, removeCartAPI } from 'api/cartAPI';

const cx = classNames.bind(styles);
function CartGoods({ data, onModify, onRemove, handleTotalPrice }) {
  const [money, setMoney] = useState('');

  const cartId = data.cart_id;
  const image = data.image.split('&')[0];

  const modifyCart = () => {
    modifyCartAPI({ cartId, money }).then(result => {
      onModify(cartId);
    });
  };

  const removeCart = () => {
    removeCartAPI({ cartId }).then(result => {
      onRemove(cartId);
    });
  };


  return (
    <div className={cx('cart-item')}>
      <input
        type="checkbox"
        onChange={e => handleTotalPrice(e, Number(data.money), data.cart_id)}
      />&ensp;
      <Link to={`/project/${data.project_id}`}>
        <span className={cx('cart-item-name')}>{data.title}</span>
      </Link>
      <div className={cx('cart-item-info')}>
        <Link to={`/project/${data.project_id}`}>
          <div
            className={cx('cart-item-info-left')}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </Link>
        <div className={cx('cart-item-info-right')}>
          <input
            type="text"
            className={cx('cart-item-input')}
            placeholder="수정 금액 입력"
            value={money}
            onChange={e => {
              setMoney(
                e.target.value
                  ? parseInt(e.target.value.replace(/,/g, '')).toLocaleString()
                  : '',
              );
            }}
          />
          <div className={cx('price')}>{data.money.toLocaleString()}$</div>
          <div className={cx('wrap')}>
            <div className={cx('modify')} onClick={modifyCart}>
              <div className={cx('modify-icon')}>
                <FaCoins className={cx('FaCoins')} />
              </div>
              <span className={cx('modify-description')}>modifiy</span>
            </div>
            <div className={cx('delete')} onClick={removeCart}>
              <div className={cx('delete-icon')}>
                <MdRemoveShoppingCart className={cx('MdRemoveShoppingCart')} />
              </div>
              <span className={cx('delete-description')}>delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartGoods;
