/* External dependencies */
import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

/* Internal dependencies */
import styles from './NavigationBar.module.scss';

const cx = classNames.bind(styles);

const addStyle = (name, target) => {
  name.current.style.backgroundColor = 'black';
  name.current.style.color = 'white';

  switch (target) {
    case 'home':
      name.current.style.width = '47px';
      break;
    case 'category':
      name.current.style.width = '100px';
      break;
    case 'popular':
      name.current.style.width = '100px';
      break;
    case 'mypage':
      name.current.style.width = '121px';
      break;
    default:
      break;
  }
};

const initStyle = name => {
  name.current.style.color = '#90949c';
  name.current.style.backgroundColor = null;
};

function NavigationBar() {
  const location = useLocation();
  const homeRef = useRef();
  const categoryRef = useRef();
  const popularRef = useRef();
  const mypageRef = useRef();

  const nav = [
    { id: '1', name: '홈', link: '/', ref: homeRef },
    { id: '2', name: '카테고리', link: '/category', ref: categoryRef },
    { id: '3', name: '인기펀딩', link: '/popular', ref: popularRef },
    { id: '4', name: '마이페이지', link: '/mypage', ref: mypageRef },
  ];

  useEffect(() => {
    const link = location.pathname;
    nav.forEach(menu => initStyle(menu.ref));
    if (link === '/') {
      addStyle(homeRef, 'home');
    } else if (link === '/category') {
      addStyle(categoryRef, 'category');
    } else if (link === '/popular') {
      addStyle(popularRef, 'popular');
    } else if (link === '/mypage') {
      addStyle(mypageRef, 'mypage');
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
