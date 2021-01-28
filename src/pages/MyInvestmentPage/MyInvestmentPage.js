/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiShoppingBag3Fill } from 'react-icons/ri';

/* Internal dependencies */
import styles from './MyInvestmentPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Header from 'components/MyDetailPage/Header';
import ShoppingCart from 'components/Global/ShoppingCart';
import InvestmentList from 'components/MyDetailPage/InvestmentList';
import useInvestment from 'hooks/useInvestment';

const cx = classNames.bind(styles);

function MyInvestmentPage() {
  const investmentList = useInvestment();

  return (
    <div className={cx('my-investment-page')}>
      <BackButton />
      <RiShoppingBag3Fill className={cx('RiShoppingBag3Fill')} />
      <Header header="Funding List" />
      <InvestmentList investmentList={investmentList} />
      <ShoppingCart />
    </div>
  );
}

export default MyInvestmentPage;
