/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PopularPage.module.scss';
import GoodsList from 'components/CategoryPage/GoodsList';
import Banner from 'components/PopularPage/Banner';
import NavigationBar from 'components/Global/NavigationBar';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';
import { getPopularProjectAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function PopularPage() {
  const [popularProjectList, setPopularProjectList] = useState([]);

  useEffect(() => {
    getPopularProjectAPI().then(result => {
      setPopularProjectList(result.data);
    });
  }, []);

  return (
    <div className={cx('popular-page')}>
      <Logo />
      <NavigationBar />
      <Banner className={cx('banner')} />
      <GoodsList projectList={popularProjectList} />
      <ShoppingCart />
    </div>
  );
}

export default PopularPage;
