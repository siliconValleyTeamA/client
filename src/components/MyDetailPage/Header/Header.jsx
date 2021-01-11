/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header(props) {
  return <h1> props.header </h1>;
}

export default Header;
