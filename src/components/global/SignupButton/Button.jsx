/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames/bind';
import { FiMail } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';

/* Internal dependencies */
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
const icons = {
  iconMail: <FiMail />,
  iconFacebook: <FaFacebookF />,
};

function Button(props) {
  const style = {
    color: props.color,
    border: props.border,
    background: props.background,
  };

  return (
    <div className={cx('signup-button')} style={style}>
      {icons[props.icon]}
      {props.text}
    </div>
  );
}

export default Button;
