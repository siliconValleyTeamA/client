import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './DetailImage.module.scss';

const cx = classNames.bind(styles);

function DetailImage({ image }) {
  const imageLinkList = image !== undefined ? image : [];
  const [mainImage, setMainImage] = useState(imageLinkList[0]);

  useEffect(() => {
    if (mainImage === undefined && imageLinkList !== undefined) {
      setMainImage(imageLinkList[0]);
    }
  }, [imageLinkList]);

  return (
    <div className={cx('detail-image-component')}>
      <div className={cx('sub')}>
        <img
          className={cx('product-details-image')}
          src={imageLinkList[0]}
          alt="product"
          onMouseOver={e => setMainImage(e.target.src)}
        />
        <img
          className={cx('product-details-image')}
          src={imageLinkList[1]}
          alt="product"
          onMouseOver={e => setMainImage(e.target.src)}
        />
        <img
          className={cx('product-details-image')}
          src={imageLinkList[2]}
          alt="product"
          onMouseOver={e => setMainImage(e.target.src)}
        />
        <img
          className={cx('product-details-image')}
          src={imageLinkList[3]}
          alt="product"
          onMouseOver={e => setMainImage(e.target.src)}
        />
      </div>
      <div className={cx('main')}>
        <img
          className={cx('product-details-main-image')}
          src={mainImage}
          alt="product"
        />
      </div>
    </div>
  );
}

export default DetailImage;
