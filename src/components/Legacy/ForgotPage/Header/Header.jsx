/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header({ field }) {
  return (
    <div className={cx('header')}>
      <h1>아이디∙비밀번호 찾기</h1>
      <div className={cx('tab-list')}>
        <ul>
          <li className={cx(field === 'id' && 'click')}>
            <a href="/find/id" onClick={() => {}}>
              아이디 찾기
            </a>
          </li>
          <li className={cx(field === 'pwd' && 'click')}>
            <a href="/find/pwd" onClick={() => {}}>
              비밀번호 찾기
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
