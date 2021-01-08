/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import { RiKakaoTalkFill } from 'react-icons/ri';

/* Internal dependencies */
import styles from './LoginPage.module.scss';
import Input from 'components/loginpage/InputForm';

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <main>
      <div className={cx('header')}>
        <div className={cx('form-container')}>
          <h1>로그인</h1>
          <form>
            <div className={styles.field}>
              <div className={cx('inputEmail')}>
                <Input type="email" text="이메일 계정" />
              </div>
            </div>
            <br></br>
            <div className={cx('field')}>
              <div className={cx('inputPassword')}>
                <Input
                  type="password"
                  text="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
                ></Input>
              </div>
            </div>
            <div className="login-action">
              <label id="saveIdLabel">
                <br></br>
                <input type="checkbox" title="아이디 저장"></input>
                <span>아이디 저장</span>
              </label>
              <p id="forgot">
                <a href="/ForgotPage">아이디, 비밀번호 찾기</a>
              </p>
            </div>
            <button type="button" className={cx('btnLogin')}>
              로그인
            </button>
          </form>
        </div>
        <br></br>
        <div className="social-login">
          <FaFacebook className={cx('facebookIcon')}></FaFacebook>
          <IoLogoApple className={cx('appleIcon')}></IoLogoApple>
          <RiKakaoTalkFill className={cx('kakaoIcon')}></RiKakaoTalkFill>
          <FcGoogle className={cx('googleIcon')}></FcGoogle>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
