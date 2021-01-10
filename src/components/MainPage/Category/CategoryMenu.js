/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './category.module.scss';

const cx = classNames.bind(styles);

function CategoryMenu({ text, inputimg, dstpage }) {
  return (
    <div className={cx('category')}>
      <div className={cx('picsection')}>
        <a href={dstpage}>
          <img className={cx('pic')} src={inputimg} alt="카테고리 사진"></img>
        </a>
      </div>
      <div className={cx('description')}>{text}</div>
    </div>
  );
}
export default CategoryMenu;
