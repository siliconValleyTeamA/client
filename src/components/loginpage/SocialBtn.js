/* External dependencies */
import React from 'react';
import { IoLogoFacebook } from 'react-icons/io';
import classNames from 'classnames/bind';
/* Internal dependencies */
import styles from './loginpage.module.scss';

const cx = classNames.bind(styles);

function SocialBtn({ name, color }) {
  return (
    <div>
      <IoLogoFacebook className={cx('icon')} color={color}></IoLogoFacebook>
    </div>
  );
}
export default SocialBtn;
