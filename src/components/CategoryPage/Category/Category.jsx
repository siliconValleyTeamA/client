/* External dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Category.module.scss';
import { setCategory } from 'modules/reducers/categoryReducer';
const cx = classNames.bind(styles);

function Category({ data, active }) {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(setCategory(data.key))}>
      <div className={cx('category')}>
        <img
          className={cx('pic', { active: active })}
          src={data.img}
          alt="카테고리 사진"
        />
        <span className={cx('text', { active: active })}>{data.label}</span>
      </div>
    </div>
  );
}
export default Category;
