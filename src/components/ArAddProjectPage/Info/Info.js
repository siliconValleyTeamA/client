/* External dependencies */
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
import axios from 'api/axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

/* Internal dependencies */
import styles from './Info.module.scss';
import { createPorjectInfoAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function Info({ Category, info, func }) {
  const [images, setImages] = useState([]);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const history = useHistory();

  const handleInfo = () => {
    info.images = images;
    info.description = text1 + '&' + text2;
    info.language = 'ar-' + sessionStorage.getItem('projectId');
    createPorjectInfoAPI(info).then(result => {
      if (result.data.success) {
        Swal.fire({
          title: '✅',
          text: 'لقد قمت بتحميل منتجك بنجاح',
          position: 'top',
          confirmButtonColor: '#00BC00',
        }).then(() => {
          history.push('/');
        });
      } else {
        Swal.fire({
          title: '❌',
          text: 'فشل تحميل المنتج.',
          position: 'top',
          confirmButtonColor: '#FF0000',
        });
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
          placeholder="الرجاء كتابة وصف عن مشروعك"
        ></textarea>
      </div>

      <textarea
        type="text"
        onChange={onText2}
        value={text2}
        className={cx('text-bottom')}
        placeholder="الرجاء كتابة وصف عن مشروعك"
      ></textarea>
      <button onClick={handleInfo}>Upload</button>
    </div>
  );
}

export default Info;
