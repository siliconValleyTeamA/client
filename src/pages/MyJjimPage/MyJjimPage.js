/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MyJjimPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import { AiFillHeart } from 'react-icons/ai';
import ShoppingCart from 'components/Global/ShoppingCart';
import JjimList from 'components/MyDetailPage/JjimList';
import useJjim from 'hooks/useJjim';

const cx = classNames.bind(styles);

function MyJjimPage() {
  const { jjimList, onRemove } = useJjim();

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
