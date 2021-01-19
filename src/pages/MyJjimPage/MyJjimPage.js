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
    handleJjimList();
  }, []);

  const handleJjimList = function () {
    getJjimListAPI().then(result => {
      setJjimList(result.data);
    });
  };

  function onRemove(jjim_id) {
    setJjimList(jjimList.filter(jjim => jjim.jjim_id !== jjim_id));
  }

  return (
    <div className={cx('myjjim-page')}>
      <BackButton />
      <AiFillHeart className={cx('AiFillHeart')} />
      <Header header="찜 목록" />
      <JjimList jjimList={jjimList} onRemove={onRemove} />
      <ShoppingCart />
    </div>
  );
}

export default MyJjimPage;
