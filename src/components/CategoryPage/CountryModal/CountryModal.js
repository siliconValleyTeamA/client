import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CountryModal.module.scss';

const cx = classNames.bind(styles);

function CountryModal({ isOpen, close }) {
  const [, setSelectCountry] = useState('korean');

  const storedCountry = e => {
    setSelectCountry(e.target.value);
    window.sessionStorage.setItem('country', e.target.value);
  };

  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className={cx('Modal-overlay')} onClick={close} />
          <div className={cx('Modal')}>
            <p className={cx('title')}>국가선택</p>
            <div className={cx('content')}>
              <div>
                <select
                  onChange={e => storedCountry(e)}
                  className={cx('country-list')}
                >
                  <option value="korean">한국어</option>
                  <option value="english">영어</option>
                  <option value="chinese">중국어</option>
                  <option value="japanese">일본어</option>
                </select>
              </div>
              <p>선택하지 않으면 자동으로 한국어가 선택됩니다.</p>
            </div>
            <div className={cx('button-wrap')}>
              <button onClick={close}>선택하기</button>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default CountryModal;
