/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './SignupPage.module.scss';
import Header from 'components/SignupPage/Header';
import Seperator from 'components/SignupPage/Seperator';
import SocialRegister from 'components/SignupPage/SocialRegister';
import EmailRegister from 'components/SignupPage/EmailRegister';

const cx = classNames.bind(styles);

function SignupPage() {
  return (
    <div className={cx('sign-up-page')}>
      <Header />
      <SocialRegister />
      <Seperator />
      <EmailRegister />
    </div>
  );
}

export default SignupPage;
