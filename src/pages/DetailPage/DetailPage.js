/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { RiArrowRightSLine, RiShoppingBag3Fill } from 'react-icons/ri';
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
  const price = '189,000';
  const percent = 22;
  const date = 19;

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
            <span>{price}</span>
            <span className={cx('product-details-info-price-unit')}>
              원 펀딩
            </span>
          </div>
        </div>
        <div className={cx('product-details-funding-info')}>
          <span className={cx('product-funding-duedate')}>{date}일 남음</span>
          <span className={cx('product-funding-money')}>{percent}% 달성</span>
        </div>

        <div className={cx('product-details-funding')}>
          <div
            className={cx('product-funding-percent')}
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className={cx('product-details-info-options')}>
          <AiFillHeart className={cx('product-details-info-options-jjim')} />
          <RiShoppingBag3Fill
            className={cx('product-details-info-options-funding')}
          />
        </div>
      </div>

      <div className={cx('product-more-details-info')}>
        <span>상세한 설명입니다.</span>
      </div>
    </div>
  );
}

export default DetailPage;
