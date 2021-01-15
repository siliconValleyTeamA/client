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
  console.log(category.id, filter);
  useEffect(() => {
    getCategoryProjectAPI({
      categoryId: category.id,
      filterType: filter,
    }).then(result => {
      console.log(result);
      setProjectList(result.data);
    });
  }, [filter, category]);

  console.log(projectList);

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
