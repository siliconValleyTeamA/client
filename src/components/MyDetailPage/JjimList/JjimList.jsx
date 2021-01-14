/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './JjimList.module.scss';
import Project from 'components/Global/Project';
const cx = classNames.bind(styles);

function JjimList({ jjimList }) {
  return (
    <div className={cx('jjim-list')}>
      {jjimList.map(jjim => (
        <Project key={jjim.id} data={jjim} />
      ))}
    </div>
  );
}

export default JjimList;
