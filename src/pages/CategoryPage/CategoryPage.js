/* External dependencies */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

/* Internal dependencies */
import styles from './CategoryPage.module.scss';
import MiddleSearch from 'components/CategoryPage/MiddleSearch';
import GoodsList from 'components/CategoryPage/GoodsList';
import CategoryList from 'components/CategoryPage/CategoryList';
import { setCategory } from 'modules/reducers/categoryReducer';
import NavigationBar from 'components/Global/NavigationBar';
import CountryModal from 'components/CategoryPage/CountryModal';

const cx = classNames.bind(styles);

function CategoryPage({ match }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const getCountry = () => {
    if (window.sessionStorage.getItem('country')) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const categoryKey = match.params.category || 'all';
    getCountry();
    dispatch(setCategory(categoryKey));
  }, [match.params.category]);

  return (
    <div className={cx('category')}>
      <CountryModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationBar />
      <CategoryList />
      <MiddleSearch />
      <GoodsList />
    </div>
  );
}

export default CategoryPage;
