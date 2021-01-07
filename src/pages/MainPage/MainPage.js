/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MainPage.module.scss';
import GoodsComponent from 'components/MainPage/GoodsComponent'

const cx = classNames.bind(styles);

function MainPage() {
  return <div>
    <div className = {cx('list1')}>
     <GoodsComponent />
     <GoodsComponent />
     <GoodsComponent />
    </div>
  </div>;
  
}

export default MainPage;
