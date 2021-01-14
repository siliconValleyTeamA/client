/* External dependencies */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import CategoryList from 'components/CategoryPage/CategoryList';
import { setCategory } from 'modules/reducers/categoryReducer';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';

const cx = classNames.bind(styles);

function CategoryPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const categoryKey = match.params.category || 'all';
    dispatch(setCategory(categoryKey));
  }, [match.params.category]);

  return (
    <div className={cx('category')}>
      <Logo />
      <NavigationBar />
      <CategoryList />
      <MiddleSearch />
      <GoodsList />
      <ShoppingCart />
    </div>
  );
}

export default CategoryPage;
