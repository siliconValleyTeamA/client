/* External dependencies */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { AiOutlineMinus } from 'react-icons/ai';

/* Internal dependencies */
import { createCartAPI } from 'api/cartAPI';
import styles from './Drawer.module.scss';
const cx = classNames.bind(styles);

function Drawer({ open, setOpen, image }) {
  const link = useLocation();
  const projectId = link.pathname.split('/')[3];
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
            <div
              className={cx('product-details-cart-image')}
              style={{
                backgroundImage: `url("${image}")`,
              }}
            ></div>
            <div className={cx('product-details-cart-buttons')}>
              <input
                type="text"
                className={cx('funding-input')}
                placeholder="$"
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
              <div
                onClick={() => {
                  setOpen(false);
                  createCartAPI({ projectId, money });
                }}
                className={cx('product-details-cart-buttons-confirm')}
              >
                Funding
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
