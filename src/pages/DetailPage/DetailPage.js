/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

/* Internal dependencies */
import styles from './DetailPage.module.scss';
import BackButton from 'components/global/BackButton';

const cx = classNames.bind(styles);

function DetailPage() {
  const firstCategory = '가전제품';
  const secondCategory = '주방가전';
  const description = '위 아래로 구워주니 기특한 인덕션';
  const name = '[해피콜] 하이브리드 인덕션 그릴 2X SYNCRILL';
  const price = '189,000원';

  return (
    <div className={cx('detail')}>
      <BackButton />
      <img
        className={cx('product-details-image')}
        src="https://img-cf.kurly.com/shop/data/goods/1589438976172z0.jpg"
        alt="product"
      />
      <div className={cx('product-details-info')}>
        <div className={cx('product-details-info-category')}>
          {firstCategory}
          <RiArrowRightSLine />
          {secondCategory}
        </div>
        <div className={cx('product-details-info-description')}>
          {description}
        </div>
        <div className={cx('product-details-info-name')}>{name}</div>
        <div className={cx('product-details-info-price-info')}>
          <div className={cx('product-details-info-price-info-price')}>
            <span
              className={cx('product-details-info-price-info-price-current')}
            >
              {price}
            </span>
          </div>
        </div>
        <div className={cx('product-details-info-options')}>
          <AiFillHeart className={cx('product-details-info-options-jjim')} />
          <FaShoppingCart className={cx('product-details-info-options-cart')} />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
