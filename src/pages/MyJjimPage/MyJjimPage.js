/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyJjimPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import GoodsList from 'components/MyDetailPage/GoodsList';
import { AiFillHeart } from 'react-icons/ai';

const cx = classNames.bind(styles);

function MyJjimPage() {
  return (
    <div className={cx('myjjim-page')}>
      <BackButton />
      <AiFillHeart className={cx('AiFillHeart')}/>
      <Header header="나의 찜 리스트" />
      <GoodsList show="jjim" />
    </div>
  );
}

export default MyJjimPage;
