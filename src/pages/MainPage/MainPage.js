/* External dependencies */
import React from 'react';

import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MainPage.module.scss';
import MiddleSearch from 'components/MainPage/MiddleSearch';
import GoodsList from 'components/MainPage/GoodsList';
import Img from '../../images/dog.jpg';
import Category from 'components/MainPage/Category/CategoryMenu';
const cx = classNames.bind(styles);

function MainPage() {
  return (
    <div>
      <div className={cx('categorydiv')}>
        <Category text="강아지" inputimg={Img} dstpage="/login"></Category>
        <Category text="고양이" inputimg={Img} dstpage="/login"></Category>
      </div>
      <MiddleSearch />
      <GoodsList />
    </div>
  );
}

export default MainPage;
