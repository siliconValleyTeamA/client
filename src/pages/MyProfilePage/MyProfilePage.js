/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { BiWorld } from 'react-icons/bi';

/* Internal dependencies */
import styles from './MyProfilePage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import ShoppingCart from 'components/Global/ShoppingCart';
import { getPointAPI } from 'api/userAPI';

const cx = classNames.bind(styles);

function MyProfilePage() {
  const [point, setPoint] = useState('');

  useEffect(() => {
    getPointAPI().then(result => {
      console.log(result);
      setPoint(result.data.point);
    });
  }, []);

  return (
    <div className={cx('setcountry')}>
      <BackButton />
      <BiWorld className={cx('BiWorld')} />
      <Header header="개인정보 설정" />
      <div className={cx('profile')}>
        <img
          className={cx('picture')}
          src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
          alt="snsProfile"
        />
        <div className={cx('userinfo')}>
          <div className={cx('user-name')}>Noh Gi Jin님</div>
          <div className={cx('user-login')}>깃허브로 로그인중</div>
        </div>
      </div>

      <div className={cx('country')}>
        <div className={cx('row')}>
          <span className={cx('edit')}>국가 수정</span>
          <span className={cx('delete')}>삭제</span>
        </div>
        <div className={cx('content')}>한국</div>
      </div>

      <div className={cx('point')}>
        <div className={cx('row')}>
          <span className={cx('edit')}>포인트 수정</span>
          <span className={cx('delete')}>초기화</span>
        </div>
        <div className={cx('content')}>{point.toLocaleString()} 포인트</div>
      </div>
      <ShoppingCart />
    </div>
  );
}
export default MyProfilePage;
