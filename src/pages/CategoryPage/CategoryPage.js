/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import CategoryList from 'components/CategoryPage/CategoryList';

const cx = classNames.bind(styles);

function CategoryPage({ match }) {
  const categoryName = match.params.category || 'all';

  return (
    <div className={cx('category')}>
      <CategoryList />
      <MiddleSearch />
      <GoodsList category={categoryName} />
    </div>
  );
}

export default CategoryPage;
