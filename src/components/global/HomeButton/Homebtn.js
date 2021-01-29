/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { AiFillHome } from 'react-icons/ai';

/* Internal dependencies */
import styles from './Homebtn.module.scss';
const cx = classNames.bind(styles);

function Homebtn() {
  return (
    <Link to="/">
      <button className={cx('cart-shortcut')}>
        <AiFillHome className={cx('AiFillHome')} />
      </button>
    </Link>
  );
}

export default Homebtn;