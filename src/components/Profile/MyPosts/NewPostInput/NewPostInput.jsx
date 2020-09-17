import React from "react";
import style from './NewPostInput.module.css'
import {FloatingWrapper} from "../../../FloatingWrapper/FloatingWrapper";


export const NewPostInput = (props) => {

    const onTextAreaChange = (e) => {
        props.onTextAreaChange(e.target.value);
    }


    return (
        <FloatingWrapper>
            <div className={style.newPostWrapper}>
                <img src={props.imgUrl} alt="" className={style.userPic}/>
                <input type="text" className={style.postInput} placeholder='New post...'
                       onChange={onTextAreaChange} value={props.newPostText}/>
                <button className={style.submitBtn} onClick={props.onSubmitClick}>Post</button>
            </div>
        </FloatingWrapper>
    )
}