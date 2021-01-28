/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './GoodsList.module.scss';
import Goods from 'components/CategoryPage/Goods';

const cx = classNames.bind(styles);

function GoodsList({ projectList }) {

  return (
    <div className={cx('goods-list')}>
      {projectList.map(project => {
        return <Goods key={project.id} data={project} />;
      })}
    </div>
  );
}

export default GoodsList;
