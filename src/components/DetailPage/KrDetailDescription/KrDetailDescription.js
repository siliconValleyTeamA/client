import React, { useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './KrDetailDescription.module.scss';

const cx = classNames.bind(styles);

function KrDetailDescription({ image, description }) {
  const imageLinkList = image !== undefined ? image : [];
  const descriptionList =
    description !== undefined ? description.split('&') : [];
  return (
    <div>
      <div className={cx('detail-set')}>
        <img
          className={cx('product-details-image')}
          src={imageLinkList[4]}
          alt="product"
        />
        <span className={cx('product-details-description')}>
          {descriptionList[0]}
        </span>
      </div>
      <div className={cx('detail-set')}>
        <img
          className={cx('product-details-image')}
          src={imageLinkList[5]}
          alt="product"
        />
        <span className={cx('product-details-description')}>
          {descriptionList[1]}
        </span>
      </div>
      <div className={cx('detail-set')}>
        <img
          className={cx('product-details-image')}
          src={imageLinkList[6]}
          alt="product"
        />
        <span className={cx('product-details-description')}>
          {descriptionList[2]}
        </span>
      </div>
      <div className={cx('detail-set')}>
        <img
          className={cx('product-details-image')}
          src={imageLinkList[7]}
          alt="product"
        />
        <span className={cx('product-details-description')}>
          {descriptionList[3]}
        </span>
      </div>
    </div>
  );
}

export default KrDetailDescription;
