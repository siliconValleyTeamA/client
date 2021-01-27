/* External dependencies */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { AiOutlineMinus } from 'react-icons/ai';

/* Internal dependencies */
import styles from './Drawer.module.scss';
import { setCategory } from 'modules/reducers/categoryReducer';
const cx = classNames.bind(styles);

function Drawer({ open, setOpen, selectFinish, categoryList }) {
  const categoryState = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();

  const selectCategory = category => {
    dispatch(setCategory(category));
  };

  return (
    <div className={cx('drawer')}>
      <div
        className={cx({ background: open })}
        onClick={() => setOpen(false)}
      />
      <div className={cx('body', { active: open })}>
        <div className={cx('holder')}>
          <AiOutlineMinus className={cx('AiOutlineMinus')} />
        </div>
        <div className={cx('container')}>
          <div className={cx('option-selector')}>
            <ul>
              {categoryList.map(category => {
                const active = categoryState.id === category.id;
                return (
                  <li
                    key={category.id}
                    className={cx({ active: active })}
                    onClick={() => {
                      selectCategory(category);
                      selectFinish();
                    }}
                  >
                    {category.key}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
