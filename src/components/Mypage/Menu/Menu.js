/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
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
          <div className={cx('title')}>내가 찜한 펀딩</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
      <Link to="/mypage/cart">
        <li className={cx('support')}>
          <FaShoppingCart className={cx('FaShoppingCart')} />
          <div className={cx('title')}>펀딩 장바구니</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
      <Link to="/mypage/history">
        <li className={cx('support')}>
          <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
          <div className={cx('title')}>내가 펀딩한 프로젝트</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
      <Link to="/mypage/profile">
        <li className={cx('country')}>
          <BiWorld className={cx('BiWorld')} />
          <div className={cx('title')}>개인정보 설정</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </li>
      </Link>
    </ol>
  );
}

export default Menu;
