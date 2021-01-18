/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import { chargePointAPI } from 'api/userAPI';
import styles from './PointDialog.module.scss';
const cx = classNames.bind(styles);

function PointDialog({ closeDialog, update }) {
  const [point, setPoint] = useState();

  const onChange = e => {
    setPoint(e.target.value);
  };

  function chargePoint() {
    chargePointAPI(point).then(result => {
      update();
    });

    closeDialog();
  }

  return (
    <div className={cx('point-dialog')}>
      <div className={cx('body')}>
        <div className={cx('container')}>
          <div className={cx('title')}>포인트 충전</div>
          <input
            className={cx('point')}
            placeholder="충전 포인트 입력"
            onChange={onChange}
            type="text"
          />
          <div className={cx('btn-wrapper')}>
            <button className={cx('confirm')} onClick={() => chargePoint()}>
              수정
            </button>
            <button className={cx('cancel')} onClick={() => closeDialog()}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointDialog;
