import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

/* Internal dependencies */
import styles from './EnDetailPage.module.scss';
import BackButton from 'components/Global/BackButton';
import Drawer from 'components/DetailPage/Drawer';
import Hit from 'components/DetailPage/Hit';
import ShoppingCart from 'components/Global/ShoppingCart';
import useDetail from 'hooks/useDetail';
import useProjectJjim from 'hooks/useProjectJjim';
import DetailIamge from 'components/DetailPage/DetailImage';

const cx = classNames.bind(styles);

function EnDetailPage() {
  const link = useLocation();
  const projectId = link.pathname.split('/')[3];
  const [open, setOpen] = useState(false);
  const { jjim, createJjim, removeJim } = useProjectJjim(projectId);
  const { project } = useDetail(projectId);
  const imageLinkList =
    project.image !== undefined ? project.image.split('&') : [];

  return (
    <div className={cx('detail')}>
      <div className={cx('upper-div')}>
        <div className={cx('image')}>
          <DetailIamge image={project.image}></DetailIamge>
        </div>
        <div className={cx('description')}>
          <BackButton />
          <div className={cx('product-details-info')}>
            <div className={cx('product-details-info-category')}>
              {project.company}
            </div>
            <div className={cx('product-details-info-name')}>
              {project.title}
            </div>
            <Hit />
            <div className={cx('product-details-info-price-info')}>
              <div className={cx('product-details-info-price-info-price')}>
                <span className={cx('product-details-info-price-unit')}>
                  until now
                </span>
                <span>{project.funding_money}</span>
                <span className={cx('product-details-info-price-unit')}>
                  WON funded
                </span>
              </div>
            </div>
            <div className={cx('product-details-funding-info')}>
              <span className={cx('product-funding-duedate')}>
                {project.left_days}days left
              </span>
              <span className={cx('product-funding-money')}>
                {project.percent}% achieved
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
        </div>
      </div>
      <div className={cx('bottom-div')}>
        <div className={cx('more-images')}>
          <img
            className={cx('product-details-image')}
            src={imageLinkList[4]}
            alt="product"
          />
          <img
            className={cx('product-details-image')}
            src={imageLinkList[5]}
            alt="product"
          />
        </div>
        <div className={cx('product-more-details-info')}>
          <span>{project.description}</span>
        </div>
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

export default EnDetailPage;
