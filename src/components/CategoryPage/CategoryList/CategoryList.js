/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

/* Internal dependencies */
import styles from './CategoryList.module.scss';
import Category from 'components/CategoryPage/Category';
import mockCategoriesList from 'api/categoryAPI';

const cx = classNames.bind(styles);

function CategoryList() {
  const [page, setPage] = useState(0);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const CATEGORY_DISPLAY_COUNT = 9;
  const CATEGORY_LENGTH = mockCategoriesList.data.length;
  const MAX_PAGE = parseInt(CATEGORY_LENGTH / CATEGORY_DISPLAY_COUNT);

  useEffect(() => {
    setSubCategoryData(
      mockCategoriesList.data.slice(
        page * CATEGORY_DISPLAY_COUNT,
        (page + 1) * CATEGORY_DISPLAY_COUNT,
      ),
    );
  }, [page]);

  return (
    <div className={cx('category-list')}>
      {page !== 0 && (
        <RiArrowLeftSLine
          className={cx('RiArrowLeftSLine')}
          onClick={() => setPage(page - 1)}
        />
      )}

      {subCategoryData.map(categoryData => {
        return <Category key={categoryData.id} data={categoryData} />;
      })}

      {page !== MAX_PAGE && (
        <RiArrowRightSLine
          className={cx('RiArrowRightSLine')}
          onClick={() => setPage(page + 1)}
        />
      )}
    </div>
  );
}
export default CategoryList;
