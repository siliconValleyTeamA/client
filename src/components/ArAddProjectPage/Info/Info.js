/* External dependencies */
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'api/axios';

/* Internal dependencies */
import styles from './Info.module.scss';
import { createPorjectInfoAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function Info({ Category, info, func }) {
  const [images, setImages] = useState([]);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleInfo = () => {
    info.images = images;
    info.description = text1 + '&' + text2;
    info.language = 'ar-' + sessionStorage.getItem('projectId');
    createPorjectInfoAPI(info).then(result => {
      if (result.data.success) {
        alert('상품을 성공적으로 업로드하였습니다.');
      } else {
        alert('상품을 업로드하는데 실패하였습니다.');
      }
    });
  };

  function onText1(event) {
    setText1(event.currentTarget.value);
  }

  function onText2(event) {
    setText2(event.currentTarget.value);
  }

  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);

    //save the Image we chose inside the Node Server
    axios.post(`/api/project/uploadimage`, formData, config).then(result => {
      setImages([...images, { filename: result.data.image }]);
    });
  };

  return (
    <div>
      <div className={cx('whole')}>
        <div className={cx('image')}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div className={cx('picturediv')} {...getRootProps()}>
                <input {...getInputProps()} />
                <AiOutlinePlusSquare
                  className={cx('icon')}
                ></AiOutlinePlusSquare>
                {images[0] ? (
                  <div onClick={() => []}>
                    <img
                      style={{
                        width: '350px',
                        height: '350px',
                      }}
                      src={images[0].filename}
                      alt={`productImg - 0`}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </Dropzone>
        </div>

        <textarea
          type="text"
          onChange={onText1}
          value={text1}
          className={cx('text-middle')}
          placeholder="Please write description about your project"
        ></textarea>

        <div className={cx('description')}>
          <div className={cx('leftside')}>
            <label>Project Name</label>
            <label>Company</label>
            <label>Goal Money</label>
            <label>Start Date</label>
            <label>End Date</label>
            <label>Category</label>
          </div>
          <div className={cx('rightside')}>
            <input type="text" onChange={func.onTitle} value={info.title} />
            <input type="text" onChange={func.onCompany} value={info.company} />
            <input
              type="number"
              onChange={func.onGoalMoney}
              value={info.goalMoney}
            />
            <input
              type="date"
              onChange={func.onStartDate}
              value={info.startDate}
            />
            <input type="date" onChange={func.onEndDate} value={info.endDate} />
            <select onChange={func.onCategoryId} value={info.categoryId}>
              {Category.map(item => (
                <option key={item.key} value={item.key}>
                  {item.value}{' '}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <textarea
        type="text"
        onChange={onText2}
        value={text2}
        className={cx('text-bottom')}
        placeholder="Please write description about your project"
      ></textarea>
      <Link to={`/`}>
        <button onClick={handleInfo}>Upload</button>
      </Link>
    </div>
  );
}

export default Info;
