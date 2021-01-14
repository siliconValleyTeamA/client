/* External dependencies */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import CategoryList from 'components/CategoryPage/CategoryList';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import { getCategoryProjectAPI } from 'api/projectAPI';
const cx = classNames.bind(styles);

function CategoryPage() {
  const filter = useSelector(state => state.filterReducer);
  const [projectList, setProjectList] = useState([]);
  const category = useSelector(state => state.categoryReducer);

  useEffect(() => {
    getCategoryProjectAPI({
      categoryId: category.key,
      filterType: filter,
    }).then(result => setProjectList(result.data));
  }, [filter, category.key]);

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
