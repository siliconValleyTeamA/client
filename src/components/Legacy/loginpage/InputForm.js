/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './loginpage.module.scss';
const cx = classNames.bind(styles);
function Inputform({ type, text }) {
  return <input className={cx('input')} type={type} placeholder={text} />;
}
export default Inputform;
