/* External dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Investment.module.scss';
const cx = classNames.bind(styles);

function Investment({ data }) {
  const projectId = data.project_id;
  const image = data.image.split('&')[0];

  return (
    <button>
      <Link to={`/project/${projectId}`}>
        <div className={cx('goods')}>
          <div
            className={cx('goods-img')}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          ></div>
          <div className={cx('goods-non-img')}>
            <div className={cx('goods-title')}>
              <h2> {data.title} </h2>
            </div>

            <div className={cx('goods-money')}>
              <span>
                Funded amount
                {data.money.toLocaleString()}$
              </span>
            </div>
          </div>
        </div>
      </Link>
    </button>
  );
}

export default Investment;
