/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import { chargePointAPI } from 'api/userAPI';
import styles from './PointDialog.module.scss';
const cx = classNames.bind(styles);

function PointDialog({ closeDialog }) {
  const revisePoint = 800;
  const chargePoint = () => {
    chargePointAPI(revisePoint);
  };

  return (
    <div className={cx('point-dialog')}>
      <div className={cx('body')}>
        <div className={cx('container')}>
          <div className={cx('title')}>포인트 충전</div>
          <input className={cx('point')} placeholder="충전 포인트 입력" />
          <div className={cx('button')} onClick={closeDialog}>
            수정
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointDialog;
