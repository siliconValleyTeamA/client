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
import LanguageModal from 'components/CategoryPage/LanguageModal';

const cx = classNames.bind(styles);

function CategoryPage({ match }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const getLanguage = () => {
    if (window.sessionStorage.getItem('language')) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const categoryKey = match.params.category || 'all';
    getLanguage();
    dispatch(setCategory(categoryKey));
  }, [match.params.category]);

  return (
    <div className={cx('category')}>
      <LanguageModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationBar />
      <CategoryList />
      <MiddleSearch />
      <GoodsList />
    </div>
  );
}

export default CategoryPage;
