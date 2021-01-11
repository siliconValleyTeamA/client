/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './FindPwdPage.module.scss';
import Input from 'components/Legacy/ForgotPage/Input';
import Button from 'components/Global/Button';
import Header from 'components/Legacy/ForgotPage/Header';

const cx = classNames.bind(styles);

function FindPwdPage() {
  return (
    <div className={cx('find-pwd-page')}>
      <Header field="pwd" />
      <div className={cx('input-box')}>
        <Input text="이메일 계정" />
      </div>
      <div className={cx('button-box')}>
        <Button text="확인" />
      </div>
    </div>
  );
}

export default FindPwdPage;
