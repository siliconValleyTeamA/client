import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './DetailImage.module.scss';

const cx = classNames.bind(styles);

function DetailImage({ image }) {
  const imageLinkList = image !== undefined ? image.split('&') : [];
  // const [defaultImage, setDefaultImage] = useState();
  const [mainImage, setMainImage] = useState(imageLinkList[1]);

  useEffect(() => {
    const imageLinkList = image !== undefined ? image.split('&') : [];
    setMainImage(imageLinkList[1]);
  }, [image]);
  // 메인페이지 수정
  return (
    <div className={cx('detail-image-component')}>
      <div className={cx('sub')}>
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
        <img
          className={cx('product-details-image')}
          src={imageLinkList[4]}
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
