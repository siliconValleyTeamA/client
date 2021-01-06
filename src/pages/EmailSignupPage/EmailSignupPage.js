/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { CgChevronRight } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineLock } from "react-icons/ai";

/* Internal dependencies */
import styles from './EmailSignupPage.module.scss';

const cx = classNames.bind(styles);
const country = [ {lang : "영어"}, {lang : "한국어"}, {lang : "중국어"}, {lang : "일본어"}];

function LanguageSelect({ lang }){
    return <option> {lang} </option>;
}

function InterestSelect({interest}){
    return <div className = {cx('interest-element')}><input type = "checkbox"/>
                <p>{interest}</p>
            </div>;
}

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
            <button className = {cx('email-auth')} onClick = {() => {}}>확인하기</button>  
        </div>
        <div><p className = {cx('notice')}>이메일을 입력해주세요.</p></div>
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
         <div>
         <div className = {cx('password-conf')}>
            <input type = "text" placeholder = "비밀번호 확인"/>
            <p className = {cx('emoji')}> <AiOutlineLock /></p>
         </div>
         <div>
            <p className = {cx('notice')}>영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상</p>
        </div>
        </div>
        </div>
        <div className = {cx('country')}>
            <p>국가선택</p>
            <div>
                <select className = {cx('country-list')}>
                    {country.map( language => (
                        <LanguageSelect lang = {language.lang}/>
                    ))}
                </select>
            </div>
        </div>
        <div className = {cx('interest')}>
            <p>관심사</p>
            <div className = {cx('interest-list')}>
            <div className = {cx('list1')} >
                <InterestSelect interest = "테크・가전"/>  
                <InterestSelect interest = "패션・잡화"/> 
                <InterestSelect interest = "뷰티"/> 
            </div>
            <div className = {cx('list2')}>
                <InterestSelect interest = "푸드"/>  
                <InterestSelect interest = "홈리빙"/> 
                <InterestSelect interest = "디자인소품"/> 
            </div>
            </div>
            
        </div>
        <button className = {cx('submit')} type = "button">완료</button>

    </div>;
}

export default EmailSignupPage;
