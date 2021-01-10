/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
/* Internal dependencies */
import styles from './Filter.module.scss';
import { setFilter } from 'modules/reducers/filterReducer';
const cx = classNames.bind(styles);

function Filter() {
  const state = useSelector(state => state.filterReducer);
  const dispatch = useDispatch();

  return (
    <select value={state} onChange={e => dispatch(setFilter(e.target.value))}>
      <option value="percent">펀딩률순</option>
      <option value="amount">펀딩금액순</option>
      <option value="closing">마감임박순</option>
    </select>
  );
}

export default Filter;
