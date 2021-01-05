/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({ text }) {
  return (
    <div>
      <button className={cx('button')}>{text}</button>
    </div>
  );
}

export default Button;
