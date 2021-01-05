/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Mypage.module.scss';
import Menu from 'components/Mypage/Menu';

const cx = classNames.bind(styles);

function Mypage() {
  return (
    <div>
      마이페이지입니다.
      <Menu />
    </div>
  );
}

export default Mypage;
