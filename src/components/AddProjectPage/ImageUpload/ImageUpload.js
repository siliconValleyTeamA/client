import React from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import classNames from 'classnames/bind';
<<<<<<< Updated upstream:src/components/AddProjectPage/Fileupload/Fileupload.js
import axios from '../../../api/axios';
=======
import axios from 'api/axios';
>>>>>>> Stashed changes:src/components/AddProjectPage/ImageUpload.js

/* Internal dependencies */
import styles from './ImageUpload.module.scss';

const cx = classNames.bind(styles);

function ImageUpload(props) {
  const [images, setImages] = useState([]);

  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);

    //save the Image we chose inside the Node Server
    axios.post(`/api/project/uploadimage`, formData, config).then(result => {
<<<<<<< Updated upstream:src/components/AddProjectPage/Fileupload/Fileupload.js
      console.log(result.data);
      if (result.data.success) {
        setImages([...Images, result.data.image]);
        props.refreshFunction([...Images, result.data.image]);
      } else {
        alert('Failed to save the Image in Server');
      }
=======
      setImages([...images, { filename: result.data.image }]);
      props.upload([...images, { filename: result.data.image }]);
>>>>>>> Stashed changes:src/components/AddProjectPage/ImageUpload.js
    });
  };

  /* const onDelete = image => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  }; */

  return (
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
  );
}

export default ImageUpload;
