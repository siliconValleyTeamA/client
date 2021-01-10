/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MainPage.module.scss';
import MiddleSearch from 'components/MainPage/MiddleSearch';
import GoodsList from 'components/MainPage/GoodsList';
import CategoryList from 'components/MainPage/CategoryList';

const cx = classNames.bind(styles);

function MainPage() {
  return (
    <div>
      <CategoryList />
      <MiddleSearch />
      <GoodsList />
    </div>
  );
}

export default MainPage;
