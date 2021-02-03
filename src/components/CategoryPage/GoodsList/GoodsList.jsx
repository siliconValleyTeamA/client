/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/CategoryPage/Goods';

import { SearchContext } from 'modules/contextAPI/search';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function GoodsList({ projectList }) {
  // console.log(projectList);
  const { searchResult, getSearch } = useContext(SearchContext);
  // console.log(searchResult.length > 0 ? searchResult[0]._source.id : 'hi!');
  const [result, setResult] = useState([]);
  const [projectList2, setProjectList2] = useState(projectList);
  const [temp, setTemp] = useState(true);
  console.log(searchResult.length);

  // const [idList, setIdList] = useState([]);
  // const list = searchResult.map(result => {
  //   setIdList([...idList, result._id])
  // })
  //const filter = (id) => { return projectList.filter(project => project.id === id) }
  // projectList = projectList.filter(project => { for (var i in idList) { project.id === i } })
  // idList.map((id) => {console.log(filter(id)[0]) })
  //setResult([...result, filter(id)[0]]) }
  useEffect(() => {
    if (searchResult.length > 0) {
      setResult(searchResult)
      setTemp(false);
    } else if (searchResult.length == 0) {
      setResult(projectList)
      //setTemp(true);
    }
  });

  return (
    temp ? (
      <div className={cx('goods-list')}>
        {result.map(project => {
          console.log('111');
          return <Goods key={project.id} data={project} />;
        })}
      </div>) : (<div className={cx('goods-list')}>
        {result.map(project => {
          console.log('22');
          return <Goods key={project._id} data={project._source} />;
        })}
      </div>)
  );
  // result.length > 0 ?
  //   <div className={cx('goods-list')}>
  //     {result.map(project => {
  //       console.log(project);
  //       return // <Goods key={project.id} data={project} />;
  //     })} </div> :
  //   <div className={cx('goods-list')}>
  //     {projectList.map(project => {
  //       console.log('22');
  //       return <Goods key={project.id} data={project} />;
  //     })} </div>
  // )
}

export default GoodsList;
