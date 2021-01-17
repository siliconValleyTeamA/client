/* External dependencies */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import Drawer from 'components/CategoryPage/Drawer';
import { getCategoryProjectAPI } from 'api/projectAPI';
import { getCategoryListAPI } from 'api/categoryAPI';
import Header from 'components/CategoryPage/Header';

const cx = classNames.bind(styles);

function CategoryPage() {
  const filter = useSelector(state => state.filterReducer);
  const [projectList, setProjectList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [open, setOpen] = useState(false);
  const category = useSelector(state => state.categoryReducer);

  const headerClick = () => {
    setOpen(true);
  };

  const selectFinish = () => {
    setOpen(false);
  };

  useEffect(() => {
    getCategoryProjectAPI({
      categoryId: category.id,
      filterType: filter,
    }).then(result => {
      setProjectList(result.data);
    });
  }, [filter, category]);

  useEffect(() => {
    getCategoryListAPI().then(result => {
      setCategoryList(result.data);
    });
  }, []);

  return (
    <div className={cx('category')}>
      <Logo />
      <NavigationBar />
      <div className={cx('wrapper')}>
        <Header className={cx('header')} headerClick={headerClick} />
        <MiddleSearch />
      </div>
      <GoodsList projectList={projectList} />
      <ShoppingCart />
      <Drawer
        open={open}
        setOpen={setOpen}
        selectFinish={selectFinish}
        categoryList={categoryList}
      />
    </div>
  );
}

export default CategoryPage;
