/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { AiFillHeart } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

/* Internal dependencies */
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
  return (
    <ol className={cx('menu')}>
      <li className={cx('jjim')}>
        <AiFillHeart className={cx('AiFillHeart')} />
        <div className={cx('title')}>내가 찜한 펀딩</div>
        <RiArrowRightSLine />
      </li>
      <li className={cx('support')}>
        <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
        <div className={cx('title')}>내가 후원한 펀딩</div>
        <RiArrowRightSLine />
      </li>
      <li className={cx('country')}>
        <BiWorld className={cx('BiWorld')} />
        <div className={cx('title')}>국가 설정</div>
        <RiArrowRightSLine />
      </li>
    </ol>
  );
}

export default Menu;
