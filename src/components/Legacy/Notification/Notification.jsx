/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import styled from 'styled-components';
/* Internal dependencies */
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({text}) {
    return (
        <div className = {cx('notification')}>
            
            <span>🛎</span>
            <span className = {cx('notification-text')}>{text}</span>
        </div>
 );
}

export default Notification;