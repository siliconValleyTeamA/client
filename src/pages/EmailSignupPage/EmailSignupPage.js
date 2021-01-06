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
    return <div className = {cx('header')}>
        <h1>회원가입</h1>
        <div>
            <input type = "checkbox"/>
            <div> 
                <p>전체동의</p>
                <p> <CgChevronRight /> </p>
            </div> 
        </div>
        <div className = {cx('email')}>
            <input type = "email" placeholder = "이메일 계정"/>
            <button type = "button">인증하기</button>
            <p>위 이메일로 인증번호가 발송됩니다.</p>
        </div>
        <div className = {cx('name')}>
            <input type = "text" placeholder = "이름"/>
            <p> <IoPersonOutline /></p>
        </div>
        <div className = {cx('password')}>
        <div>
            <input type = "text" placeholder = "비밀번호 입력"/>
            <p> <AiOutlineLock /></p>
         </div>
         <div>
            <input type = "text" placeholder = "비밀번호 확인"/>
            <p> <AiOutlineLock /></p>
         </div>
        </div>
        <button type = "button">완료</button>
    </div>;
}

export default EmailSignupPage;
