/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './CategoryList.module.scss';
import Category from 'components/MainPage/Category';
import mockCategoriesList from 'api/categoryAPI';

const cx = classNames.bind(styles);

function CategoryList() {
  return (
    <div className={cx('category-list')}>
      {mockCategoriesList.data.map(categoryData => {
        return <Category key={categoryData.id} data={categoryData} />;
      })} 
    </div>
  );
}
export default CategoryList;
