/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiArrowRightSLine } from 'react-icons/ri';

/* Internal dependencies */
import styles from './BackButton.module.scss';
const cx = classNames.bind(styles);

function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button className={cx('back-button')} onClick={goBack}>
      <RiArrowRightSLine className={cx('RiArrowRightSLine')} />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
