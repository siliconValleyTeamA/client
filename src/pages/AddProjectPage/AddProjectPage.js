/* External dependencies */
import React, { useState } from 'react'
import FileUpload from '../../components/AddProjectPage/Fileupload'
import classNames from 'classnames/bind';
import axios from '../../api/axios'

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
  const [CompanyTitleValue, setCompanyTitleValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [GoalPriceValue, setGoalPriceValue] = useState(0)
  const [StartDate, setStartDate] = useState(new Date())
  const [EndDate, setEndDate] = useState(new Date())  
  const [CategoryValue, setCategoryValue] = useState(1)   
  const [Images, setImages] = useState([])

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value)
  } 
  const onCompanyTitleValue = (event) => {
    setCompanyTitleValue(event.currentTarget.value)
  }
  const onGoalPriceValue = (event) => {
    setGoalPriceValue(event.currentTarget.value)
  }
  const onStartDate = (event) => {
    setStartDate(event.currentTarget.value)
  }
  const onEndDate = (event) => {    
      setEndDate(event.currentTarget.value);
  }
  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value)
  }
  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value)
  }
  const updateImages = (newImages) => {
    setImages(newImages)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (!TitleValue || !DescriptionValue || !CompanyTitleValue || !GoalPriceValue || 
      !StartDate || !EndDate||!CategoryValue || !Images) {
        return alert('모든 항목을 채워주세요!')
    }else if(StartDate>EndDate){
      return alert('날짜 설정을 확인해주세요!')
    }
    const variables = { 
      title: TitleValue,
      company: CompanyTitleValue,
      goalmoney: GoalPriceValue,
      start_date: StartDate,
      end_date: EndDate,
      description: DescriptionValue,     
      images: Images,
      category: CategoryValue   
  }    
    axios.post('/api/project/uploadproject', variables)
    .then(response => {
      if (response.data.success) {
        alert('상품을 성공적으로 업로드하였습니다.')
          props.history.push('/')
      }else {
        alert('상품을 업로드하는데 실패하였습니다.')
      }
    })    
  }         

   return (
    <div className={cx('addprojectdiv')}>
      <div className={cx('titlediv')}>
        <h1 className={cx('title')}>프로젝트 업로드</h1>
      </div>
    <form onSubmit={onSubmit}>
        <FileUpload refreshFunction={updateImages} />
        <br/><br/>
        <div className={cx('discription')}>
          <div className={cx('leftside')}>
            <label >프로젝트명</label>
            <label >기업명</label>
            <label >목표금액</label>
            <label >시작일</label>
            <label >종료일</label>
            <label >프로젝트 설명</label>
            <label >카테고리</label>
          </div>
          <div className={cx('rightside')}>
            <input type="text" onChange={onTitleChange} value={TitleValue}/>
            <br/>
            <input type="text" onChange={onCompanyTitleValue} value={CompanyTitleValue}/> 
            <br/>
            <input type="number" onChange={onGoalPriceValue} value={GoalPriceValue}/> 
            <br/>
            <input type="date" onChange={onStartDate} value={StartDate}/> 
            <br/>
            <input type="date" onChange={onEndDate} value={EndDate}/> 
            <br/>
            <textarea onChange={onDescriptionChange} value={DescriptionValue}/>
            <br/>
            <select onChange={onCategorySelectChange} value={CategoryValue}>
            <br/>
              {Category.map(item => (<option key={item.key} value={item.key}>{item.value} </option>))}
            </select>
          </div>  
        </div>          
        <button onClick={onSubmit}>다음</button>
    </form>
    </div>
    )
}

export default AddProjectPage;