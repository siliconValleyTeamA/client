/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import ShoppingCart from 'components/Global/ShoppingCart';
import Logo from 'components/Global/Logo';
import NavigationBar from 'components/Global/NavigationBar';
import Drawer from 'components/CategoryPage/Drawer';
import Header from 'components/CategoryPage/Header';
import useCategory from 'hooks/useCategory';
// import 

const cx = classNames.bind(styles);

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const { projectList, categoryList } = useCategory();

  const headerClick = () => {
    setOpen(true);
  };

  const selectFinish = () => {
    setOpen(false);
  };

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
