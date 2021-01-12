/* External dependencies */
import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

/* Internal dependencies */
import styles from './NavigationBar.module.scss';

const cx = classNames.bind(styles);

const changeStyle = name => {
  name.current.style.backgroundColor = '#00c4c4';
  name.current.style.color = 'white';
};

function NavigationBar() {
  const location = useLocation();
  const homeRef = useRef(1);
  const categoryRef = useRef(2);
  const popularPundingRef = useRef(3);
  const mypageRef = useRef(4);
  const styled = {
    background: 'white',
    color: '#00c4c4',
  };

  const nav = [
    { id: '1', name: '홈', link: '/', ref: homeRef },
    { id: '2', name: '카테고리', link: '/', ref: categoryRef },
    { id: '3', name: '인기펀딩', link: '/', ref: popularPundingRef },
    { id: '4', name: '마이페이지', link: '/mypage', ref: mypageRef },
  ];

  useEffect(() => {
    const link = location.pathname;
    if (link === '/') {
      changeStyle(homeRef);
    } else if (link === '/mypage') {
      changeStyle(mypageRef);
    }
  });

  return (
    <div className={cx('Header')}>
      <ul className={cx('navigation_bar')}>
        {nav.map(menu => (
          <Link to={menu.link} key={menu.id}>
            <li
              ref={menu.ref}
              key={menu.id}
              id={menu.id}
              className={cx('nav')}
              style={styled}
            >
              {menu.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
