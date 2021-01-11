/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MainPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import CategoryList from 'components/CategoryPage/CategoryList';

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
