/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Category.module.scss';
const cx = classNames.bind(styles);

function Category({ data }) {
  return (
    <Link to={`/category/${data.link}`}>
      <div className={cx('category')}>
        <img className={cx('pic')} src={data.img} alt="카테고리 사진" />
        <div className={cx('description')}>{data.category}</div>
      </div>
    </Link>
  );
}
export default Category;
