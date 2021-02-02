/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { BiWorld } from 'react-icons/bi';

/* Internal dependencies */
import styles from './MyProfilePage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import ShoppingCart from 'components/Global/ShoppingCart';



const cx = classNames.bind(styles);

function MyProfilePage() {

  return (
    <div className={cx('setcountry')}>
      <BackButton />
      <BiWorld className={cx('BiWorld')} />
      <Header header="Profile Setting" />
      <div className={cx('profile')}>      
        <img
          className={cx('picture')}
          src="https://fuding-bucket.s3.ap-northeast-2.amazonaws.com/profile.png"
          alt="snsProfile"
        />
        <div className={cx('userinfo')}>
          <div className={cx('user-name')}>Noh Gi Jin님</div>
          <div className={cx('user-login')}>깃허브로 로그인중</div>
        </div>
      </div>
      <br></br>
      <div className={cx('language')}>
        <div className={cx('row')}>
          <span className={cx('edit')}>Change language</span>
          <span className={cx('delete')}>기본값 적용</span>
        </div>
        <div className={cx('content')}>한국어</div>
      </div>
      <ShoppingCart />
    </div>
  );
}
export default MyProfilePage;
