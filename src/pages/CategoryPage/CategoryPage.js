/* External dependencies */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import CategoryList from 'components/CategoryPage/CategoryList';
import { setCategory } from 'modules/reducers/categoryReducer';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import { getCategoryProjectAPI } from 'api/projectAPI';
const cx = classNames.bind(styles);

function CategoryPage({ match }) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterReducer);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const categoryKey = match.params.category || 'all';
    dispatch(setCategory(categoryKey));
  }, [match.params.category]);

  useEffect(() => {
    getCategoryProjectAPI({ categoryId: 1, filterType: filter }).then(result =>
      setProjectList(result.data),
    );
  }, [match.params.category, filter]);

  return (
    <div className={cx('category')}>
      <Logo />
      <NavigationBar />
      <CategoryList />
      <MiddleSearch />
      <GoodsList projectList={projectList} />
      <ShoppingCart />
    </div>
  );
}

export default CategoryPage;
