/* External dependencies */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'api/axios';

/* Internal dependencies */
import styles from './TopInfo.module.scss';
import { createPorjectInfoAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function ProjectInfo({ Category, info, func }) {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  // const [description, setDescription] = useState([]);

  const createProjectInfo = () => {
    info.images = images;
    info.description = text;
    createPorjectInfoAPI(info).then(result => {
      if (result.data.success) {
        alert('상품을 성공적으로 업로드하였습니다.');
      } else {
        alert('상품을 업로드하는데 실패하였습니다.');
      }
    });
  };

  function onText(event) {
    setText(event.currentTarget.value);
    // setDescription([...description, { idx: text }]);
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
    <div className={cx('en-info')}>
      <div className={cx('whole')}>
        <div className={cx('image')}>
          <div className={cx('empty')}>
            This section will be showed by first image.
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

      <div className={cx('image-description')}>
        <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
          {({ getRootProps, getInputProps }) => (
            <div className={cx('picturediv')} {...getRootProps()}>
              <input {...getInputProps()} />
              <AiOutlinePlusSquare className={cx('icon')}></AiOutlinePlusSquare>
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
        <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
          {({ getRootProps, getInputProps }) => (
            <div className={cx('picturediv')} {...getRootProps()}>
              <input {...getInputProps()} />
              <AiOutlinePlusSquare className={cx('icon')}></AiOutlinePlusSquare>
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
          onChange={onText}
          value={text}
          className={cx('text-description')}
          placeholder="Please write description about your project"
        ></textarea>
      </div>

      <Link to={`/`}>
        <button onClick={createProjectInfo}>Upload</button>
      </Link>
    </div>
  );
}

export default ProjectInfo;
