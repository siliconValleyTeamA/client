/* External dependencies */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

/* Internal dependencies */
import styles from './ArDetailPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Drawer from 'components/DetailPage/Drawer';
import Hit from 'components/DetailPage/Hit';
import ShoppingCart from 'components/Global/ShoppingCart';
import useDetail from 'hooks/useDetail';
import useProjectJjim from 'hooks/useProjectJjim';

const cx = classNames.bind(styles);

function ArabDetailPage() {
  const link = useLocation();
  const projectId = link.pathname.split('/')[3];
  const [open, setOpen] = useState(false);
  const { jjim, createJjim, removeJim } = useProjectJjim(projectId);
  const { project } = useDetail(projectId);

  return (
    <div className={cx('detail')}>
      <BackButton />
      <div className={cx('top')}>
        <div className={cx('leftside')}>
          <div className={cx('product-details-info')}>
            <div className={cx('product-details-info-category')}>
              <bdo dir="rtl" style={{ textalign: 'right' }}>
                {project.company}
              </bdo>
            </div>
            <div className={cx('product-details-info-name')}>
              <bdo dir="rtl">{project.title}</bdo>
            </div>
            <Hit />
            <div className={cx('product-details-info-price-info')}>
              <div className={cx('product-details-info-price-info-price')}>
                <bdo dir="rtl">
                  <span className={cx('product-details-info-price-unit')}>
                    حتى الآن
                  </span>
                  {project.funding_money}
                  <span className={cx('product-details-info-price-unit')}>
                    التمويل
                  </span>
                </bdo>
              </div>
            </div>
            <div className={cx('product-details-funding-info')}>
              <span className={cx('product-funding-duedate')}>
                <bdo dir="rtl">{project.left_days}الأيام المتبقية</bdo>
              </span>
              <span className={cx('product-funding-money')}>
                <bdo dir="rtl">{project.percent}% إحراز</bdo>
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
                  onClick={removeJim}
                />
              ) : (
                <AiOutlineHeart
                  className={cx('product-details-info-options-jjim')}
                  onClick={createJjim}
                />
              )}

              <RiShoppingBag3Fill
                className={cx('product-details-info-options-funding')}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
          <div className={cx('product-more-details-info')}>
            <bdo dir="rtl">{project.description}</bdo>
          </div>
        </div>
        <div className={cx('rightside')}>
          <img
            className={cx('product-details-image')}
            src={project.image}
            alt="product"
          />
        </div>
      </div>
      <div className={cx('bottom')}>
        <bdo dir="rtl">{project.description}</bdo>
      </div>
      <Drawer
        open={open}
        setOpen={setOpen}
        data={project}
        projectId={projectId}
      />
      <ShoppingCart />
    </div>
  );
}

export default ArabDetailPage;
