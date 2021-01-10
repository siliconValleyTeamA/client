/* External dependencies */
import React, { createContext, useState, memo, useContext } from 'react';
import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';

/* Internal dependencies */
import styles from './MiddleSearch.module.scss';
const cx = classNames.bind(styles);

function MiddleSearch() {
  return (
    <div className={cx('middle-navigation')}>
      <div className={cx('header')}>
        <h1> 전체보기 </h1>
      </div>
      <div className={cx('navigation')}>
        <SearchBar />
        <div className={cx('filter')}>
          <FilterProvider>
            <FilterContent />
          </FilterProvider>
        </div>
      </div>
    </div>
  );
}

function SearchBar(props) {
  return (
    <div className={cx('search')}>
      <input
        type="text"
        placeholder="검색"
        onChange={event => {}}
        className={cx('search-input')}
      />
      <button onClick={() => {}}>
        <FiSearch />
      </button>
    </div>
  );
}

const FilterContent = memo(() => {
  return (
    <div>
      <FilterPicker />
    </div>
  );
});

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [menu, setMenu] = useState('P');

  return (
    <FilterContext.Provider value={{ menu, setMenu }}>
      {children}
    </FilterContext.Provider>
  );
}

function FilterPicker() {
  const { menu, setMenu } = useContext(FilterContext);

  return (
    <select
      value={menu}
      onChange={event => {
        setMenu(event.target.value);
      }}
    >
      <option value="P">펀딩률순</option>
      <option value="M">펀딩금액순</option>
      <option value="T">마감임박순</option>
    </select>
  );
}

export default MiddleSearch;
