/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiArrowRightSLine } from 'react-icons/ri';

/* Internal dependencies */
import styles from './BackButton.module.scss';
const cx = classNames.bind(styles);

function BackButton() {
  return (
    <button className={cx('back-button')}>
      <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
      <span>뒤로가기</span>
    </button>
  );
}

export default BackButton;
