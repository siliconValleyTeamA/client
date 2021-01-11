/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { FaApple } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

/* Internal dependencies */
import styles from './SocialRegister.module.scss';
import Btn from 'components/Global/SignupButton';
const cx = classNames.bind(styles);

function SocialRegister() {
  return (
    <div className={cx('social-register')}>
      <Btn
        icon="iconFacebook"
        text="페이스북으로 가입"
        border="1px solid #304d8a"
        background="#304d8a"
        color="white"
      />

      <button
        type="button"
        id="appleJoinButton"
        className={cx('apple', 'round')}
      >
        <FaApple />
      </button>

      <button
        type="button"
        id="kakaoJoinButton"
        className={cx('kakao', 'round')}
      >
        <RiKakaoTalkFill />
      </button>

      <button
        type="button"
        id="naverJoinButton"
        className={cx('naver', 'round')}
      >
        N
      </button>

      <button
        type="button"
        id="googleJoinButton"
        className={cx('google', 'round')}
      >
        <FcGoogle />
      </button>
    </div>
  );
}

export default SocialRegister;
