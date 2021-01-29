/* External dependencies */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router-dom';
import axios from 'api/axios';
import Swal from 'sweetalert2';

/* Internal dependencies */
import styles from './Info.module.scss';
import { createPorjectInfoAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function ProjectInfo({ Category, info, func }) {
  const [images, setImages] = useState([]);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const history = useHistory();

  const createProjectInfo = () => {
    info.images = images;
    info.description = text1 + '&' + text2 + '&' + text3 + '&' + text4;
    info.language = 'ko-' + sessionStorage.getItem('projectId');
    createPorjectInfoAPI(info).then(result => {
      if (result.data.success) {
        Swal.fire({
          title: '✅',
          text: '상품을 성공적으로 업로드하였습니다.',
          position: 'top',
          confirmButtonColor: '#00BC00',
        }).then(() => {
          history.push('/');
        });
      } else {
        Swal.fire({
          title: '❌',
          text: '상품을 업로드하는데 실패하였습니다.',
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
  function onText3(event) {
    setText3(event.currentTarget.value);
  }
  function onText4(event) {
    setText4(event.currentTarget.value);
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
    <div className={cx('kr-info')}>
      <div className={cx('whole')}>
        <div className={cx('image')}>
          <div className={cx('empty')}>
            이 곳에는 첫 번째로 업로드하는 이미지가 들어갈 예정입니다.
          </div>
          <div className={cx('image-button')}>
            <div className={cx('uploaddiv')}>
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
                            width: '110px',
                            height: '120px',
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
            <div className={cx('uploaddiv')}>
              <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                {({ getRootProps, getInputProps }) => (
                  <div className={cx('picturediv')} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <AiOutlinePlusSquare
                      className={cx('icon')}
                    ></AiOutlinePlusSquare>
                    {images[1] ? (
                      <div onClick={() => []}>
                        <img
                          style={{
                            width: '110px',
                            height: '120px',
                          }}
                          src={images[1].filename}
                          alt={`productImg - 1`}
                        />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
            <div className={cx('uploaddiv')}>
              <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                {({ getRootProps, getInputProps }) => (
                  <div className={cx('picturediv')} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <AiOutlinePlusSquare
                      className={cx('icon')}
                    ></AiOutlinePlusSquare>
                    {images[2] ? (
                      <div onClick={() => []}>
                        <img
                          style={{
                            width: '110px',
                            height: '120px',
                          }}
                          src={images[2].filename}
                          alt={`productImg - 2`}
                        />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
            <div className={cx('uploaddiv')}>
              <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                {({ getRootProps, getInputProps }) => (
                  <div className={cx('picturediv')} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <AiOutlinePlusSquare
                      className={cx('icon')}
                    ></AiOutlinePlusSquare>
                    {images[3] ? (
                      <div onClick={() => []}>
                        <img
                          style={{
                            width: '110px',
                            height: '120px',
                          }}
                          src={images[3].filename}
                          alt={`productImg - 3`}
                        />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
          </div>
        </div>

        <div className={cx('description')}>
          <div className={cx('leftside')}>
            <label>프로젝트명</label>
            <label>회사</label>
            <label>목표 펀딩 금액</label>
            <label>시작 날짜</label>
            <label>종료 날짜</label>
            <label>카테고리</label>
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

      <div className={cx('image-description')}>
        <div className={cx('image-description-comp')}>
          <Dropzone
            className={cx('image-description-sub')}
            onDrop={onDrop}
            multiple={false}
            maxSize={800000000}
          >
            {({ getRootProps, getInputProps }) => (
              <div className={cx('picturediv')} {...getRootProps()}>
                <input {...getInputProps()} />
                <AiOutlinePlusSquare
                  className={cx('icon')}
                ></AiOutlinePlusSquare>
                {images[4] ? (
                  <div onClick={() => []}>
                    <img
                      style={{
                        width: '450px',
                        height: '330px',
                      }}
                      src={images[4].filename}
                      alt={`productImg - 4`}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </Dropzone>
          <textarea
            type="text"
            onChange={onText1}
            value={text1}
            className={cx('text-description')}
            placeholder="Please write description about your project"
          ></textarea>
        </div>
        <div className={cx('image-description-comp')}>
          <Dropzone
            className={cx('image-description-sub')}
            onDrop={onDrop}
            multiple={false}
            maxSize={800000000}
          >
            {({ getRootProps, getInputProps }) => (
              <div className={cx('picturediv')} {...getRootProps()}>
                <input {...getInputProps()} />
                <AiOutlinePlusSquare
                  className={cx('icon')}
                ></AiOutlinePlusSquare>
                {images[5] ? (
                  <div onClick={() => []}>
                    <img
                      style={{
                        width: '450px',
                        height: '330px',
                      }}
                      src={images[5].filename}
                      alt={`productImg - 5`}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </Dropzone>
          <textarea
            type="text"
            onChange={onText2}
            value={text2}
            className={cx('text-description')}
            placeholder="Please write description about your project"
          ></textarea>
        </div>
        <div className={cx('image-description-comp')}>
          <Dropzone
            className={cx('image-description-sub')}
            onDrop={onDrop}
            multiple={false}
            maxSize={800000000}
          >
            {({ getRootProps, getInputProps }) => (
              <div className={cx('picturediv')} {...getRootProps()}>
                <input {...getInputProps()} />
                <AiOutlinePlusSquare
                  className={cx('icon')}
                ></AiOutlinePlusSquare>
                {images[6] ? (
                  <div onClick={() => []}>
                    <img
                      style={{
                        width: '450px',
                        height: '330px',
                      }}
                      src={images[6].filename}
                      alt={`productImg - 6`}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </Dropzone>
          <textarea
            type="text"
            onChange={onText3}
            value={text3}
            className={cx('text-description')}
            placeholder="Please write description about your project"
          ></textarea>
        </div>
        <div className={cx('image-description-comp')}>
          <Dropzone
            className={cx('image-description-sub')}
            onDrop={onDrop}
            multiple={false}
            maxSize={800000000}
          >
            {({ getRootProps, getInputProps }) => (
              <div className={cx('picturediv')} {...getRootProps()}>
                <input {...getInputProps()} />
                <AiOutlinePlusSquare
                  className={cx('icon')}
                ></AiOutlinePlusSquare>
                {images[7] ? (
                  <div onClick={() => []}>
                    <img
                      style={{
                        width: '450px',
                        height: '330px',
                      }}
                      src={images[7].filename}
                      alt={`productImg - 7`}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </Dropzone>
          <textarea
            type="text"
            onChange={onText4}
            value={text4}
            className={cx('text-description')}
            placeholder="Please write description about your project"
          ></textarea>
        </div>
      </div>

      <button onClick={createProjectInfo}>Upload</button>
    </div>
  );
}

export default ProjectInfo;
