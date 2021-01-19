import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import classNames from 'classnames/bind';
import axios from 'axios';

/* Internal dependencies */
import styles from './Fileupload.module.scss';

const cx = classNames.bind(styles);

function FileUpload(props) {
    const [Images, setImages] = useState([])
    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        console.log("a");
        //save the Image we chose inside the Node Server 
        axios.post(`/api/project/uploadproject`, {formData}, config).then(response => {             
                if (response.data.success) {
                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])
                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }
    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        props.refreshFunction(newImages)
    }
    return (
        <div className={cx('uploaddiv')}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div className={cx('picturediv')} 
                        {...getRootProps()}
                    >                       
                        <input {...getInputProps()} />
                        {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}
                        <AiOutlinePlusSquare className={cx('icon')}></AiOutlinePlusSquare>
                    </div>
                )}
            </Dropzone>
            <div className={cx('preview')}>
                {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:3000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FileUpload