/* External dependencies */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useImageDescription from 'hooks/useImageDescription';

/* Internal dependencies */
import { createJjimAPI, removeJjimAPI } from 'api/jjimAPI';

import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project({ data, type, jjimType, onRemove }) {
  const [jjim, setJjim] = useState(true);
  const projectId = jjimType ? data.project_id : data.id;
  const jjimId = jjimType ? data.jjim_id : '';
  const image = data.image.split('&')[0];
  const [link,setLink] = useState('');
  const [isLanguage, setIsLanguage] = useState(false);
  const changeLink = useImageDescription(data.id, navigator.language);
  
  useEffect(()=>{
    if (changeLink.length > 0) {
      changeLink.map((data) => {
        if (navigator.language.includes(data.language)) {
          setIsLanguage(true);
        }
      });
    }
    if(!isLanguage){
      setLink(`/en/project/${data.id}`);
    }else{
      if(navigator.language.length > 2){
        const tmp = navigator.language.split('-')[0];
        setLink(`/${tmp}/project/${data.id}`);
      }else{
        setLink(`/${navigator.language}/project/${data.id}`);
      }
    }
  },[changeLink, link, isLanguage])

  const createJjim = () => {
    setJjim(true);
    createJjimAPI({ projectId });
  };

  const removeJim = () => {
    setJjim(false);
    removeJjimAPI({ jjimId }).then(result => {
      onRemove(jjimId);
    });
  };

  if (!jjimType) {
    return (
      <Link to={link}>
        <div
          className={cx('project')}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        >
          <div className={cx('project-info')}>
            <div className={cx('project-info-name')}>{data.title}</div>
            <div className={cx('project-info-price')}>
              <span className={cx('project-info-price-current')}>
                {type === 'open'
                  ? 'Released after' + data.open_left_days
                  : data.percent + '% achieved'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={cx('project')}
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      {jjim ? (
        <div className={cx('heart-wrapper')}>
          <AiFillHeart className={cx('AiFillHeart')} onClick={removeJim} />
        </div>
      ) : (
        <div className={cx('heart-wrapper')}>
          <AiOutlineHeart
            className={cx('AiOutlineHeart')}
            onClick={createJjim}
          />
        </div>
      )}

      <Link to={link}>
        <div className={cx('project-info')}>
          <div className={cx('project-info-name')}>{data.title}</div>
          <div className={cx('project-info-price')}>
            <span className={cx('project-info-price-current')}>
              {data.left_days + 'days left'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Project;
