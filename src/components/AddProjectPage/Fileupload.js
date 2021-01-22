import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
import { postUploadImageAPI } from 'api/projectAPI';

/* Internal dependencies */
import styles from './Fileupload.module.scss';

const cx = classNames.bind(styles);

function FileUpload(props) {
  const [Images, setImages] = useState([]);
  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    //save the Image we chose inside the Node Server
    postUploadImageAPI(formData, config).then(result => {
      if (result.data.success) {
        setImages([...Images, result.data.image]);
        props.refreshFunction([...Images, result.data.image]);
      } else {
        alert('Failed to save the Image in Server');
      }
    });
  };

  const onDelete = image => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  };
  return (
    <div className={cx('uploaddiv')}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div className={cx('picturediv')} {...getRootProps()}>
            <input {...getInputProps()} />
            <AiOutlinePlusSquare className={cx('icon')}></AiOutlinePlusSquare>
          </div>
        )}
      </Dropzone>
      <div className={cx('preview')}>
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`http://localhost:8080/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
