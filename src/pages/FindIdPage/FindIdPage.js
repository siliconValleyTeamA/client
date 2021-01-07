/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './FindIdPage.module.scss';
import Input from 'components/ForgotPage/Input';
import Button from 'components/global/Button';
import Header from 'components/ForgotPage/Header';

const cx = classNames.bind(styles);

function FindIdPage() {
  return (
    <div className={cx('find-id-page')}>
      <Header field="id" />
      <div className={cx('input-box')}>
        <Input text="이메일 계정" />
      </div>
      <div className={cx('button-box')}>
        <Button text="확인" />
      </div>
    </div>
  );
}

export default FindIdPage;
