/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

/* Internal dependencies */
import styles from './CategoryList.module.scss';
import Category from 'components/CategoryPage/Category';
import { getCategoryListAPI } from 'api/categoryAPI';

const cx = classNames.bind(styles);

function CategoryList() {
  const [page, setPage] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const CATEGORY_DISPLAY_COUNT = 7;
  const CATEGORY_LENGTH = categoryList.length;
  const MAX_PAGE =
    parseInt(CATEGORY_LENGTH / CATEGORY_DISPLAY_COUNT) +
    (CATEGORY_LENGTH % CATEGORY_DISPLAY_COUNT ? 0 : -1);
  const category = useSelector(state => state.categoryReducer).label;

  useEffect(() => {
    getCategoryListAPI().then(result => {
      setCategoryList(result.data);
    });
  }, []);

  useEffect(() => {
    setSubCategoryData(
      categoryList.slice(
        page * CATEGORY_DISPLAY_COUNT,
        (page + 1) * CATEGORY_DISPLAY_COUNT,
      ),
    );
  }, [categoryList, page]);

  console.log(page);
  return (
    <div className={cx('category-list')}>
      {page !== 0 && (
        <RiArrowLeftSLine
          className={cx('RiArrowLeftSLine')}
          onClick={() => setPage(page - 1)}
        />
      )}

      {subCategoryData.map(categoryData => {
        return categoryData.category === category ? (
          <Category key={categoryData.id} data={categoryData} active={true} />
        ) : (
          <Category key={categoryData.id} data={categoryData} active={false} />
        );
      })}

      {page < MAX_PAGE && (
        <RiArrowRightSLine
          className={cx('RiArrowRightSLine')}
          onClick={() => setPage(page + 1)}
        />
      )}
    </div>
  );
}
export default CategoryList;
