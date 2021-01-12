 /* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';


/* Internal dependencies */
import styles from './SetCountry.module.scss';

const cx = classNames.bind(styles);


function SetCountry() {
  return (
    <div className={cx('filter')}>
      <select> 
        <option value="korea">한국</option>
        <option value="us">미국</option>
        <option value="china">중국</option>
      </select>
    </div>
  );
}
export default SetCountry;
