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
    <div className={cx('filter')}>
      <select value={state} onChange={e => dispatch(setFilter(e.target.value))}>
        <option value="percent">funding rate</option>
        <option value="amount">funding amount</option>
        <option value="closing">deadline</option>
      </select>
    </div>
  );
}

export default Filter;
