/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Seperator.module.scss';
const cx = classNames.bind(styles);

function Seperator() {
  return (
    <div className={cx('seperator')}>
      <span>또는</span>
    </div>
  );
}

export default Seperator;
