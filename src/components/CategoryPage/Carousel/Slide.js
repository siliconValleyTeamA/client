/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import Carousel from 'infinite-react-carousel';

/* Internal dependencies */
import styles from './Slide.module.scss';
import Img1 from 'images/banner.png';
import Img2 from 'images/dog.jpg';
import Img3 from 'images/goods.jpeg';

const cx = classNames.bind(styles);

function Slides() {
  const SimpleSlider = () => (
    <Carousel className={cx('wrap')} dots autoplay arrows={false}>
      <img src={Img1} className={cx('pic')} alt="carousel" />
      <img
        src="https://fuding-bucket.s3.ap-northeast-2.amazonaws.com/carousel3.jpg"
        className={cx('pic')}
        alt="carousel"
      />
      <img
        src="https://fuding-bucket.s3.ap-northeast-2.amazonaws.com/carousel2.jpg"
        className={cx('pic')}
        alt="carousel"
      />
    </Carousel>
  );
  return <SimpleSlider className={cx('carousel')} />;
}

export default Slides;
