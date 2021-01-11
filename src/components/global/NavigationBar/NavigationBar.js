/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

/* Internal dependencies */
import styles from './NavigationBar.module.scss';

const cx = classNames.bind(styles);

const nav = [
  { id: '1', name: '홈', link: '/main' },
  { id: '2', name: '카테고리', link: '/main' },
  { id: '3', name: '인기펀딩', link: '/main' },
  { id: '4', name: '마이페이지', link: '/mypage' },
];

const changeStyle = id => {
  document.getElementById(id).style.color = 'white';
  document.getElementById(id).style.backgroundColor = '#00c4c4';
};

const styleSetting = () => {
  let link = document.location.href.split('/')[3];
  if (link === 'main') {
    changeStyle('1');
  } else if (link === 'mypage') {
    changeStyle('4');
  }
};

class NavigationBar extends React.Component {
  componentDidMount() {
    styleSetting();
  }
  render() {
    return (
      <div className={cx('Header')}>
        <ul className={cx('navigation_bar')}>
          {nav.map(menu => (
            <Link to={menu.link} key={menu.id}>
              <li
                key={menu.id}
                id={menu.id}
                className={cx('nav')}
                onClick={e => {
                  console.log(e.target.id);
                }}
              >
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavigationBar;
