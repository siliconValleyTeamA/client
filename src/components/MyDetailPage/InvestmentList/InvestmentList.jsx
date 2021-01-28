/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './InvestmentList.module.scss';
import Investment from 'components/MyDetailPage/Investment';
const cx = classNames.bind(styles);

function InvestmentList({ investmentList }) {
  return (
    <div className={cx('investment-list')}>
      {investmentList.map(investment => (
        <Investment key={investment.id} data={investment} />
      ))}
    </div>
  );
}

export default InvestmentList;
