/* External dependencies */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlinePlusSquare } from 'react-icons/ai';

/* Internal dependencies */
import styles from './KRdescription.module.scss';
import FileUpload from 'components/AddProjectPage/Fileupload';
import {createKRdescriptionAPI} from 'api/projectAPI';

const cx = classNames.bind(styles);

function KRdescription(props){
    const [inputValue, setInputValue] = useState([]);
    const [Images, setImages] = useState([]);
    const updateImages = newImages => {
        setImages(newImages);
    }
    
    const [state, setState] =React.useState([]);
    const clickHandler=() =>{
        setState([
            ...state,
            {
                image: "",
                content: "",
            },
        ]);        
    };
    const deleteHandler=(postIndex)=>{
        console.log(state);
        setState(state.filter((post,index)=>postIndex !==index)); 
        };

    const submitHandler = (event) => {
        event.preventDefault();
    }
    
    return(
      <div>
        <form onSubmit={submitHandler}>
          <div>            
            {state.map((post,index)=>(
              <div className={cx('inputfield')} >
                <div className={cx('leftside')}>                                  
                  <FileUpload refreshFunction={updateImages}></FileUpload>
                </div>
                <div className={cx('rightside')}>
                  <textarea></textarea>
                </div>   
                <button onClick={() =>deleteHandler(index)}>delete</button>
              </div>                                    
          ))}      
           <AiOutlinePlusSquare className={cx('icon')} onClick={clickHandler}></AiOutlinePlusSquare>               
        </div>
        <button className={cx('submitbtn')}>제출</button>
        </form>
   </div>
    )
}

export default KRdescription;
