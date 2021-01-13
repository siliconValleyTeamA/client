/* External dependencies */
import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

/* Internal dependencies */
import styles from './NavigationBar.module.scss';

const cx = classNames.bind(styles);

const addStyle = name => {
  name.current.style.backgroundColor = '#00c4c4';
  name.current.style.color = 'white';
};

const initStyle = name => {
  name.current.style.backgroundColor = 'white';
  name.current.style.color = '#00c4c4';
};

function NavigationBar() {
  const location = useLocation();
  const homeRef = useRef();
  const categoryRef = useRef();
  const popularRef = useRef();
  const mypageRef = useRef();

  const nav = [
    { id: '1', name: '홈', link: '/', ref: homeRef },
    { id: '2', name: '카테고리', link: '/category/all', ref: categoryRef },
    { id: '3', name: '인기펀딩', link: '/popular', ref: popularRef },
    { id: '4', name: '마이페이지', link: '/mypage', ref: mypageRef },
  ];

  useEffect(() => {
    const link = location.pathname;
    nav.forEach(menu => initStyle(menu.ref));
    if (link === '/') {
      addStyle(homeRef);
    } else if (link === '/category/all') {
      addStyle(categoryRef);
    } else if (link === '/popular') {
      addStyle(popularRef);
    } else if (link === '/mypage') {
      addStyle(mypageRef);
    }
  });

  return (
    <div className={cx('Header')}>
      <ul className={cx('navigation_bar')}>
        {nav.map(menu => (
          <Link to={menu.link} key={menu.id}>
            <li ref={menu.ref} key={menu.id} id={menu.id} className={cx('nav')}>
              {menu.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
