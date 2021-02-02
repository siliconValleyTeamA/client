/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';

/* Internal dependencies */
import styles from './MiddleSearch.module.scss';
import Filter from 'components/Global/Filter';
import axios from 'api/axios';

const cx = classNames.bind(styles);

function MiddleSearch() {
  return (
    <div className={cx('middle-navigation')}>
      <div className={cx('navigation')}>
        <SearchBar />      
        <Filter />
      </div>
    </div>
  );
}

function SearchBar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className={cx('search')}>
      <input type="text" onChange={handleChange} placeholder="search" className={cx('search-input')} />
      <button onClick={() => { axios.post(`/api/search`, { search }) }}>
        <FiSearch />
      </button>
    </div>
  );
}

export default MiddleSearch;