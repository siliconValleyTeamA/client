/* External dependencies */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import { RiArrowRightSLine, RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

/* Internal dependencies */
import styles from './DetailPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Drawer from 'components/DetailPage/Drawer';
import Hit from 'components/DetailPage/Hit';
import ShoppingCart from 'components/Global/ShoppingCart';
import { getProjectDetailAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function DetailPage() {
  const link = useLocation();
  const projectId = link.pathname.split('/')[2];
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectDetailAPI({ projectId }).then(result => {
      setProject(result.data);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [jjim, setJjim] = useState(false);

  return (
    <div className={cx('detail')}>
      <BackButton />
      <img
        className={cx('product-details-image')}
        src={project.img}
        alt="product"
      />
      <div className={cx('product-details-info')}>
        <div className={cx('product-details-info-category')}>
          {project.category}
          <RiArrowRightSLine />
          {project.category}
        </div>
        <div className={cx('product-details-info-description')}>
          {project.description}
        </div>
        <div className={cx('product-details-info-name')}>{project.title}</div>
        <Hit />
        <div className={cx('product-details-info-price-info')}>
          <div className={cx('product-details-info-price-info-price')}>
            <span className={cx('product-details-info-price-unit')}>
              지금까지
            </span>
            <span>{project.amount?.toLocaleString()}</span>
            <span className={cx('product-details-info-price-unit')}>
              원 펀딩
            </span>
          </div>
        </div>
        <div className={cx('product-details-funding-info')}>
          <span className={cx('product-funding-duedate')}>
            {project.dueDate}일 남음
          </span>
          <span className={cx('product-funding-money')}>
            {project.percent}% 달성
          </span>
        </div>

        <div className={cx('product-details-funding')}>
          <div
            className={cx('product-funding-percent')}
            style={{ width: `${project.percent}%` }}
          />
        </div>

        <div className={cx('product-details-info-options')}>
          {jjim ? (
            <AiFillHeart
              className={cx('product-details-info-options-jjim')}
              onClick={() => setJjim(false)}
            />
          ) : (
            <AiOutlineHeart
              className={cx('product-details-info-options-jjim')}
              onClick={() => setJjim(true)}
            />
          )}

          <RiShoppingBag3Fill
            className={cx('product-details-info-options-funding')}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <div className={cx('product-more-details-info')}>
        <span>상세한 설명입니다.</span>
      </div>
      <Drawer open={open} setOpen={setOpen} data={project} />
      <ShoppingCart />
    </div>
  );
}

export default DetailPage;
