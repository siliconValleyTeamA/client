import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UsaDescription.module.scss';
import FileUpload from '../Fileupload';

const cx = classNames.bind(styles);

function UsaDescription({ Category, info, func }) {
  return (
    <div className={cx('usa-component')}>
      <h1 className={cx('usa-title')}> USA Detail</h1>
      <FileUpload refreshFunction={func.onImages} />
      <FileUpload refreshFunction={func.onImages} />
      <textarea
        className={cx('description')}
        type="text"
        placeholder="please write description about project"
      ></textarea>
    </div>
  );
}

export default UsaDescription;
