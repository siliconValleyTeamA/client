/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { IoIosFolder } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';

/* Internal dependencies */
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
  return (
    <ol className={cx('ol-menu')}>
      <Link to="/mypage/jjim">
        <li className={cx('jjim')}>
          <AiFillHeart className={cx('AiFillHeart')} />
          <div className={cx('title')}>My selected funding </div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
      <Link to="/mypage/cart">
        <li className={cx('support')}>
          <FaShoppingCart className={cx('FaShoppingCart')} />
          <div className={cx('title')}>My funding cart</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
      <Link to="/mypage/investment">
        <li className={cx('support')}>
          <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
          <div className={cx('title')}>My funding project</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
      <Link to="/en/addproject">
        <li className={cx('support')}>
          <IoIosFolder className={cx('IoIosFolder')} />
          <div className={cx('title')}>Register funding project</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
    </ol>
  );
}

export default Menu;
