/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';

/* Internal dependencies */
import styles from './MiddleSearch.module.scss';
import Filter from 'components/Global/Filter';
import Header from 'components/CategoryPage/Header';

const cx = classNames.bind(styles);

function MiddleSearch() {
  return (
    <div className={cx('middle-navigation')}>
      <Header className={cx('header')} />
      <div className={cx('navigation')}>
        <SearchBar />
        <Filter />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className={cx('search')}>
      <input type="text" placeholder="검색" className={cx('search-input')} />
      <button onClick={() => {}}>
        <FiSearch />
      </button>
    </div>
  );
}

export default MiddleSearch;
