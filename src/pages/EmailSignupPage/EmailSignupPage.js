/* External dependencies */
import React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineLock } from 'react-icons/ai';

/* Internal dependencies */
import styles from './EmailSignupPage.module.scss';

const cx = classNames.bind(styles);
const country = [
  { id: 1, lang: '한국어' },
  { id: 2, lang: '영어' },
  { id: 3, lang: '중국어' },
  { id: 4, lang: '일본어' },
];

function InputInfo({ className, type, placeholder, onChange }) {
  return (
    <input
      className={cx({ className })}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

function Notice({ text }) {
  return (
    <div>
      <p className={cx('notice')}> {text} </p>{' '}
    </div>
  );
}

function LanguageSelect({ lang }) {
  return <option> {lang} </option>;
}

function InterestSelect({ interest }) {
  return (
    <div className={cx('interest-element')}>
      <input type="checkbox" required />
      <p>{interest}</p>
    </div>
  );
}

function EmailSignupPage() {
  const [password, setPassword] = useState('✓ 비밀번호를 입력해주세요.');
  const [email, setEmail] = useState('✓ 이메일을 입력해주세요.');
  const [name, setName] = useState('✓ 이름을 입력해주세요.');

  const checkName = e => {
    if (e.target.value.length > 0) {
      setName('');
    } else {
      setName('✓ 이름을 입력해주세요.');
    }
  };

  const checkEmail = e => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (e.target.value.length > 0 && !regExp.test(e.target.value)) {
      setEmail('✓ 이메일을 확인해주세요.');
    } else if (e.target.value.length === 0) {
      setEmail('✓ 이메일을 입력해주세요.');
    } else if (e.target.value.length > 0 && regExp.test(e.target.value)) {
      setEmail('');
    }
  };
  const checkInputPassword = e => {
    const regExp = /^[a-zA-Z0-9!@#$%^&*+=-]{8,20}$/i;
    if (e.target.value.length > 0 && !regExp.test(e.target.value)) {
      setPassword('✓ 비밀번호를 확인해주세요.');
    } else if (e.target.value.length === 0) {
      setPassword('✓ 비밀번호를 입력해주세요.');
    } else if (e.target.value.length > 0 && regExp.test(e.target.value)) {
      setPassword('✓ 확인 비밀번호를 입력해주세요.');
    }
  };

  const checkPassword = e => {
    const inputPassword =
      e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0]
        .value;
    if (e.target.value.length === 0) {
      setPassword('✓ 비밀번호를 입력해주세요.');
    } else if (e.target.value !== inputPassword) {
      setPassword('✓ 비밀번호가 다릅니다.');
    } else if (e.target.value === inputPassword) {
      setPassword('');
    }
  };

  return (
    <div className={cx('signup')}>
      <h1 className={cx('title')}>회원가입</h1>
      <hr />
      <div>
        <div className={cx('email')}>
          <input
            className={cx('email-input')}
            type="email"
            placeholder="이메일 계정"
            onChange={checkEmail}
          />
        </div>
        <Notice text={email} />
      </div>
      <div className={cx('name')}>
        <InputInfo
          className="name-input"
          type="text"
          placeholder="이름"
          onChange={checkName}
        />
        <p className={cx('emoji')}>
          <IoPersonOutline />
        </p>
      </div>
      <Notice text={name} />
      <div className={cx('password')}>
        <div className={cx('password-input')}>
          <InputInfo
            className=""
            type="password"
            placeholder="비밀번호 입력해주세요"
            onChange={checkInputPassword}
          />
          <p className={cx('emoji')}>
            <AiOutlineLock />
          </p>
        </div>
        <div>
          <div className={cx('password-conf')}>
            <InputInfo
              className=""
              type="password"
              placeholder="비밀번호 확인"
              onChange={checkPassword}
            />
            <p className={cx('emoji')}>
              <AiOutlineLock />
            </p>
          </div>
          <Notice text="✓ 영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상" />
          <Notice text={password} />
        </div>
      </div>
      <div className={cx('country')}>
        <p>국가선택</p>
        <div>
          <select className={cx('country-list')}>
            {country.map((language, index) => (
              <LanguageSelect key={index} lang={language.lang} />
            ))}
          </select>
        </div>
      </div>
      <div className={cx('interest')}>
        <p>관심사</p>
        <div className={cx('interest-list')}>
          <div className={cx('list1')}>
            <InterestSelect interest="테크・가전" />
            <InterestSelect interest="패션・잡화" />
            <InterestSelect interest="뷰티" />
          </div>
          <div className={cx('list2')}>
            <InterestSelect interest="푸드" />
            <InterestSelect interest="홈리빙" />
            <InterestSelect interest="디자인소품" />
          </div>
        </div>
      </div>
      <button className={cx('submit')} type="submit">
        완료
      </button>
    </div>
  );
}

export default EmailSignupPage;
