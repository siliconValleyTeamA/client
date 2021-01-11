 /* External dependencies */
import React  from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

/* Internal dependencies */
import styles from './SetCountry.module.scss';

const cx = classNames.bind(styles);

function SetCountry() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className={cx('filter')}>
      <select value={state} onChange={e => dispatch(e.target.value)}>
        <option value="korea">한국</option>
        <option value="us">미국</option>
        <option value="china">중국</option>
      </select>
    </div>
  );
}
export default SetCountry;
