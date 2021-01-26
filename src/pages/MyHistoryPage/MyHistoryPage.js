/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiShoppingBag3Fill } from 'react-icons/ri';

/* Internal dependencies */
import styles from './MyHistoryPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import ShoppingCart from 'components/Global/ShoppingCart';
import HistoryList from 'components/MyDetailPage/HistoryList';
import useHistory from 'hooks/useHistory';

const cx = classNames.bind(styles);

function MyHistoryPage() {
  const historyList = useHistory();

  return (
    <div className={cx('myhistory-page')}>
      <BackButton />
      <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
      <Header header="Funding History" />
      <HistoryList historyList={historyList} />
      <ShoppingCart />
    </div>
  );
}

export default MyHistoryPage;
