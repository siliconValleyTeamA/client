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
                {/* <input type ="email" id="userName" name="userName" placeholder="이메일 아이디"></input> */}
                <Input type="email" text="이메일 계정" />
                {/*  <em id="emailError">이메일 형식이 올바르지 않습니다.</em> */}
              </div>
            </div>
            <br></br>
            <div className={cx('field')}>
              <div className={cx('inputPassword')}>
                {/* <input type="password" id="userPassword" name="userPassword" placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"></input> */}
                <Input
                  type="password"
                  text="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
                ></Input>
              </div>
              {/* <p>
                등록되지 않은 아이디거나, 아이디 또는 비밀번호가 회원정보와
                일치하지 않습니다.
              </p> */}
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
          {/* <Mycom></Mycom> */}
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
