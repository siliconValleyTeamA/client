/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

/* Internal dependencies */
import styles from './Category.module.scss';
import { setCategory } from 'modules/reducers/categoryReducer';

const cx = classNames.bind(styles);

function Category({ data }) {
  const dispatch = useDispatch();

  return (
    <Link to={`/category/${data.link}`}>
      <div
        className={cx('category')}
        onClick={() => {
          dispatch(setCategory(data.category));
        }}
      >
        <img className={cx('pic')} src={data.img} alt="카테고리 사진" />
        <div className={cx('description')}>{data.category}</div>
      </div>
    </Link>
  );
}
export default Category;
