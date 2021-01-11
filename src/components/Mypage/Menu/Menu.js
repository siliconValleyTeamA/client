/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { AiFillHeart } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { Link } from 'react-router-dom';

/* Internal dependencies */
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
  return (
    <ol className={cx('ol-menu')}>
      <li className={cx('jjim')}>
        <Link to={'/mypage/jjim'}>
          <AiFillHeart className={cx('AiFillHeart')} />
          <div className={cx('title')}>내가 찜한 펀딩</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </Link>
      </li>
      <li className={cx('support')}>
        <Link to={'/mypage/funding'}>
          <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
          <div className={cx('title')}>내가 후원한 펀딩</div>
          <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
        </Link>
      </li>
      <li className={cx('country')}>
        <BiWorld className={cx('BiWorld')} />
        <div className={cx('title')}>국가 설정</div>
        <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
      </li>
    </ol>
  );
}

export default Menu;
