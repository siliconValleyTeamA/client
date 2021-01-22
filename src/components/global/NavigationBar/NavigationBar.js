/* External dependencies */
import React, { useRef, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import cookie from 'react-cookies';
/* Internal dependencies */
import styles from './NavigationBar.module.scss';
import { googleTranslate } from 'api/translateAPI';

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

  const nav = useMemo(
    () => [
      { id: '1', name: 'Home', link: '/', ref: homeRef },
      { id: '2', name: 'Category', link: '/category', ref: categoryRef },
      { id: '3', name: 'Popular Project', link: '/popular', ref: popularRef },
      { id: '4', name: 'MyPage', link: '/mypage', ref: mypageRef },
    ],
    [homeRef, categoryRef, popularRef, mypageRef],
  );
  const link = location.pathname;

  useEffect(() => {
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
  }, [link, nav]);

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
