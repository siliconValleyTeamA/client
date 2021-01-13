/* External dependencies */
import React from "react";
import classNames from 'classnames/bind';
import Carousel from 'infinite-react-carousel';

/* Internal dependencies */
import styles from './Slide.module.scss';
import Img1 from '../../../images/banner.png';
import Img2 from '../../../images/dog.jpg';
import Img3 from '../../../images/goods.jpeg';

const cx = classNames.bind(styles);

function Slides(){    
  const SimpleSlider = () => (
    <Carousel dots autoplay arrows={false}>
      <div>
        <img src={Img1} className={cx('pic')}/>
      </div>
      <div>
        <img src={Img2} className={cx('pic')}/>
      </div>
      <div>
        <img src={Img3} className={cx('pic')}/>
      </div>        
    </Carousel>
    );
    return(        
      <SimpleSlider className={cx('carousel')}/>  
    ); 
}

export default Slides;