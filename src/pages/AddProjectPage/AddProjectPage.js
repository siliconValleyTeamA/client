/* External dependencies */
import React, { useState } from 'react'
import FileUpload from '../../components/AddProjectPage/Fileupload'
import classNames from 'classnames/bind';
import Axios from 'axios';

/* Internal dependencies */
import styles from './AddProjectPage.module.scss';

const cx = classNames.bind(styles);

const Category = [
    { key: 1, value: "테크/가전" },
    { key: 2, value: "패션/잡화" },
    { key: 3, value: "푸드" },
    { key: 4, value: "홈리빙" },
    { key: 5, value: "디자인소품" },
    { key: 6, value: "여행/레저" },
    { key: 7, value: "스포츠/모빌리티" },
    { key: 8, value: "반려동물" },
    { key: 9, value: "기타" }
]

function AddProjectPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)   
    const [Images, setImages] = useState([])
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !CategoryValue || !Images) {
            return alert('모든 항목을 채워주세요!')
        }        
     }

    return (
        <div className={cx('addprojectdiv')}>
            <div className={cx('titlediv')}>
                <h1 className={cx('title')}>프로젝트 업로드</h1>
            </div>
            <form onSubmit={onSubmit}>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <div>
                    <span >프로젝트명</span>
                    <input type="text"
                        onChange={onTitleChange}
                        value={TitleValue}
                    />
                </div>
                <br />
                <br />
                <span >프로젝트 설명</span>
                <textarea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <span >가격(원)</span>
                <input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <span >카테고리</span>
                <select onChange={onCategorySelectChange} value={CategoryValue}>
                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />              
                <button onClick={onSubmit}>업로드</button>
            </form>
        </div>
    )
}

export default AddProjectPage;