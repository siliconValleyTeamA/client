/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const category = useSelector(state => state.categoryReducer);
  return <div className={cx('header')}>{category.label}</div>;
}

export default Header;
