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
        <option value="korea">Korea</option>
        <option value="us">USA</option>
        <option value="china">China</option>
      </select>
    </div>
  );
}
export default SetCountry;
