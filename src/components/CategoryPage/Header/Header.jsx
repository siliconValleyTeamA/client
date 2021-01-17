/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { RiArrowDownSLine } from 'react-icons/ri';

/* Internal dependencies */
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ headerClick }) {
  const category = useSelector(state => state.categoryReducer);

  return (
    <div className={cx('wrapper')} onClick={headerClick}>
      <div className={cx('header')}>{category.label}</div>
      <RiArrowDownSLine className={cx('RiArrowDownSLine')} />
    </div>
  );
}

export default Header;
