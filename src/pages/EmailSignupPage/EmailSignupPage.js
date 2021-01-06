/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { CgChevronRight } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineLock } from "react-icons/ai";

/* Internal dependencies */
import styles from './EmailSignupPage.module.scss';

const cx = classNames.bind(styles);

function EmailSignupPage() {
    return <div className = {cx('signup')}>       
        <h1 className = {cx('title')}>회원가입</h1>
        <div className = {cx('agree')}>
            <input className = {cx('agree-chkbtn')}type = "checkbox"/>
            <div className = {cx('agree-text')}> 
                <p>전체동의</p>
                <p className = {cx('agree-more', 'emoji')}> <CgChevronRight /> </p>
            </div> 
        </div>
        <div>
        <div className = {cx('email')}>
            <input className = {cx('email-input')} type = "email" placeholder = "이메일 계정"/>
            <button className = {cx('email-auth')} onClick = {() => {}}>인증하기</button>  
        </div>
        <div><p>위 이메일로 인증번호가 발송됩니다.</p></div>
        </div>
        <div className = {cx('name')}>
            <input className = {cx('name-input')}type = "text" placeholder = "이름"/>
            <p className = {cx('emoji')}> <IoPersonOutline /></p>
        </div>
        <div className = {cx('password')}>
        <div className = {cx('password-input')}>
            <input type = "text" placeholder = "비밀번호 입력"/>
            <p className = {cx('emoji')}> <AiOutlineLock /></p>
         </div>
         <div className = {cx('password-conf')}>
            <input type = "text" placeholder = "비밀번호 확인"/>
            <p className = {cx('emoji')}> <AiOutlineLock /></p>
         </div>
        </div>
        <button className = {cx('submit')} type = "button">완료</button>
    </div>;
}

export default EmailSignupPage;
