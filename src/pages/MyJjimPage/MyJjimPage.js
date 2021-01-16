/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyJjimPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import { AiFillHeart } from 'react-icons/ai';
import ShoppingCart from 'components/Global/ShoppingCart';
import JjimList from 'components/MyDetailPage/JjimList';
import { getJjimListAPI } from 'api/jjimAPI';

const cx = classNames.bind(styles);

function MyJjimPage() {
  const [jjimList, setJjimList] = useState([]);

  useEffect(() => {
    getJjimListAPI().then(result => {
      setJjimList(result.data);
    });
  }, []);

  return (
    <div className={cx('myjjim-page')}>
      <BackButton />
      <AiFillHeart className={cx('AiFillHeart')} />
      <Header header="나의 찜 리스트" />
      <JjimList jjimList={jjimList} />
      <ShoppingCart />
    </div>
  );
}

export default MyJjimPage;
