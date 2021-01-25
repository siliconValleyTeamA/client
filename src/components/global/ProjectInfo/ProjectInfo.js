/* External dependencies */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'api/axios';

/* Internal dependencies */
import styles from './ProjectInfo.module.scss';
import { createPorjectInfoAPI } from 'api/projectAPI';

const cx = classNames.bind(styles);

function ProjectInfo({ Category, info, func }) {
  const [images, setImages] = useState([]);

  const createProjectInfo = () => {
    info.images = images;
    createPorjectInfoAPI(info).then(result => {
      if (result.data.success) {
        alert('상품을 성공적으로 업로드하였습니다.');
      } else {
        alert('상품을 업로드하는데 실패하였습니다.');
      }
    });
  };

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
      <div className={cx('uploaddiv')}>
        <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
          {({ getRootProps, getInputProps }) => (
            <div className={cx('picturediv')} {...getRootProps()}>
              <input {...getInputProps()} />
              <AiOutlinePlusSquare className={cx('icon')}></AiOutlinePlusSquare>
              {images.map((image, index) => (
                <div onClick={() => []}>
                  <img
                    style={{
                      minWidth: '300px',
                      width: '300px',
                      height: '240px',
                    }}
                    src={`${image.filename}`}
                    alt={`productImg-${index}`}
                  />
                </div>
              ))}
            </div>
          )}
        </Dropzone>
      </div>

      <div className={cx('discription')}>
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
      <Link to={`/`}>
        <button onClick={createProjectInfo}>Upload</button>
      </Link>
    </div>
  );
}

export default ProjectInfo;
