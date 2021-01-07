/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsComponent.module.scss';
import Img from 'images/goods.jpeg';

const cx = classNames.bind(styles);

//{title, category, company, percent, total, d_day}

function GoodsComponent() {
  const title = '[비블리X위글위글] 선빼고 다드려요! 2만원대 무선 미니 고데기';
  const category = '뷰티';
  const company = '(주)명성';
  const percent = 7348;
  const total = '36,740,200';
  const dueDate = '18';
  let width = 0;

  if (percent > 100) {
    width = 100;
  } else {
    width = percent;
  }

  return (
    <div className={cx('goods')}>
      <div className={cx('goods-img')}>
        <img src={Img} alt="goods-detail" />
      </div>
      <div className={cx('goods-title')}>
        <h3> {title} </h3>
      </div>
      <div className={cx('goods-catecory-company')}>
        <span> {category} </span>
        <span> | </span>
        <span> {company}</span>
      </div>
      <div>
        <div
          className={cx('goods-progressbar')}
          style={{ width: `${width}%` }}
        />
      </div>
      <div className={cx('goods-progressinfo')}>
        <div className={cx('goods-progressinfo-percent')}>
          <p>{percent}%</p>
          <span>・ {total}원</span>
        </div>
        <div>
          <span>{dueDate}일 남음</span>
        </div>
      </div>
    </div>
  );
}

export default GoodsComponent;
