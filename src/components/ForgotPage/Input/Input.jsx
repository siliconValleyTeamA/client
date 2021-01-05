/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Input.module.scss';
const cx = classNames.bind(styles);

function Input({ text }) {
  return (
      <input className={cx('input-field')} type="text" placeholder={text} />
  );
}

export default Input;
