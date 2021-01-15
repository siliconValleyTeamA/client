/* External dependencies */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/MyDetailPage/Goods';
import { getJjimList } from 'api/jjimAPI';
import { getHistoryList } from 'api/historyAPI';
import { getJjimListAPI } from 'api/jjimAPI';
import mocHistoryList from 'api/historyAPI';

const cx = classNames.bind(styles);

function GoodsList(props) {
  const [soonJjimProjectList, setsoonJjimProjectList] = useState([]);
  const [soonHistoryList, setsoonHistoryList] = useState([]);
  useEffect(() => {
    getJjimList().then(result => {
      setsoonJjimProjectList(result.data);
    });
    getHistoryList().then(result => {
      setsoonHistoryList(result.data);
  const [jjimList, setJjimList] = useState([]);
  useEffect(()=>{
    getJjimListAPI().then(result =>{
      setJjimList(result.data);
    });
  }, []);

  return (
    <div className={cx('goods-list')}>
      {props.show === 'history' &&
        soonHistoryList
          .map(historyData => (
            <Goods key={historyData.id} data={historyData} type={'history'} />
          ))}
      {props.show === 'jjim' &&
        soonJjimProjectList
          .map(jjimData => (
            <Goods key={jjimData.id} data={jjimData} type={'jim'} />
          ))}
        jjimList.map(jjimData => (
            <Goods key={jjimData.id} data={jjimData} type={'jim'} />
          ))
          }
    </div>
  );
}

export default GoodsList;
