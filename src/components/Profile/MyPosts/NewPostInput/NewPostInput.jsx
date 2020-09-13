import React from "react";
import style from './NewPostInput.module.css'
import {FloatingWrapper} from "../../../FloatingWrapper/FloatingWrapper";

export const NewPostInput = (props) => {
    return (
        <FloatingWrapper>
            <div className={style.newPostWrapper}>
                <img src={props.imgUrl} alt="" className={style.userPic}/>
                <input type="text" className={style.postInput} placeholder='New post...'/>
                <button className={style.submitBtn}>Post</button>
            </div>
        </FloatingWrapper>
    )
}