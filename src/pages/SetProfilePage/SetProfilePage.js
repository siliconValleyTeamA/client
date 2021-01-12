/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { BiWorld } from 'react-icons/bi';

/* Internal dependencies */
import styles from './SetProfilePage.module.scss';
import SetCountry from 'components/Mypage/SetCountry/SetCountry';

const cx = classNames.bind(styles);

function SetProfilePage() {
  return (
    <div className={cx('setcountry')}>
      <h1 className={cx('title')}>국가 설정 및 포인트 관리</h1><br></br>
        <div className={cx('profilediv')}>
          <img className={cx('picture')} src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg" alt="snsProfile"/>
          <div className={cx('userinfo')}>
            <p>유창헌님</p><br/>
            <p>(깃허브로 로그인 중)</p>
          </div>
        </div> 
        <div className={cx('subtitle')}>국가 설정</div>
        <div className={cx('country')}>
          <BiWorld className={cx('BiWorld')}/>&emsp;            
          <label>국가 :</label>&ensp;          
            <SetCountry className={cx('countrylist')}></SetCountry>
        </div>
        <div className={cx('subtitle')}>포인트 관리</div>
        <div className={cx('point')}>       
          잔여 포인트: 10000P
        </div>
    </div>
  );
}
export default SetProfilePage;
