/* External dependencies */
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import useImageDescription from 'hooks/useImageDescription';

/* Internal dependencies */
import styles from './Goods.module.scss';

const cx = classNames.bind(styles);

function Goods({ data }) {
  let width = data.percent > 100 ? 100 : data.percent;
  const image = data.image.split('&')[0];
  const [link,setLink] = useState('');
  const [isLanguage, setIsLanguage] = useState(false);
  const changeLink = useImageDescription(data.id, navigator.language);
  
  useEffect(()=>{
    if (changeLink.length > 0) {
      changeLink.map((data) => {
        if (navigator.language.includes(data.language)) {
          setIsLanguage(true);
        }
      });
    }
    if(!isLanguage){
      setLink(`/en/project/${data.id}`);
    }else{
      if(navigator.language.length > 2){
        const tmp = navigator.language.split('-')[0];
        setLink(`/${tmp}/project/${data.id}`);
      }else{
        setLink(`/${navigator.language}/project/${data.id}`);
      }
    }
  },[changeLink, link, isLanguage])

  return (
    <div className={cx('goods')}>
      <Link to={link}>
        <div className={cx('goods-img')}>
          <img src={image} alt="goods-detail" />
        </div>
        <h3 className={cx('goods-title')}> {data.title} </h3>
        <div className={cx('goods-catecory-company')}>
          <span> {data.company}</span>
        </div>
        <div>
          <div
            className={cx('goods-progressbar')}
            style={{ width: `${width}%` }}
          />
        </div>
        <div className={cx('goods-progressinfo')}>
          <div className={cx('goods-progressinfo-percent')}>
            <p>{data.percent}%</p>
            <span>${data.funding_money.toLocaleString()}</span>
          </div>
          <div>
            <span>{data.left_days}days to go</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Goods;
