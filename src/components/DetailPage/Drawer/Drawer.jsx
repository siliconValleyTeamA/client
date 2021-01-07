/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineMinus } from 'react-icons/ai';

/* Internal dependencies */
import styles from './Drawer.module.scss';
const cx = classNames.bind(styles);

function Drawer({ open, setOpen }) {
  const [money, setMoney] = useState('');

  return (
    <div className={cx('drawer')}>
      <div
        className={cx({ background: open })}
        onClick={() => setOpen(false)}
      />
      <div className={cx('body', { active: open })}>
        <div className={cx('holder')}>
          <AiOutlineMinus className={cx('AiOutlineMinus')} />
        </div>
        <div className={cx('container')}>
          <div className={cx('product-details-cart')}>
            <img
              className={cx('product-details-cart-image')}
              src="https://img-cf.kurly.com/shop/data/goods/1581930271767l0.jpg"
              alt="장바구니용 사진"
            />
            <div className={cx('product-details-cart-buttons')}>
              <input
                type="text"
                className={cx('funding-input')}
                placeholder="금액입력"
                value={money}
                onChange={e => {
                  setMoney(
                    e.target.value
                      ? parseInt(
                          e.target.value.replace(/,/g, ''),
                        ).toLocaleString()
                      : '',
                  );
                }}
              />
              <div className={cx('product-details-cart-buttons-confirm')}>
                펀딩하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
