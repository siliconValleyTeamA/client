/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ data }) {
  return (
    <div className={cx('category')}>
      <div className={cx('picsection')}>
        <a href={data.link}>
          <img className={cx('pic')} src={data.img} alt="카테고리 사진"></img>
        </a>
      </div>
      <div className={cx('description')}>{data.text}</div>
    </div>
  );
}
export default Category;
