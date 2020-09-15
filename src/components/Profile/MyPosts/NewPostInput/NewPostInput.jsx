import React from "react";
import style from './NewPostInput.module.css'
import {FloatingWrapper} from "../../../FloatingWrapper/FloatingWrapper";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";





export const NewPostInput = (props) => {
    let textArea = React.createRef();

    const textAreaOnChange = () => {
        props.dispatch(updateNewPostTextActionCreator(textArea.current.value));
    }

    const submitBtnOnClick = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <FloatingWrapper>
            <div className={style.newPostWrapper}>
                <img src={props.imgUrl} alt="" className={style.userPic}/>
                <input type="text" className={style.postInput} placeholder='New post...'
                       onChange={textAreaOnChange} ref={textArea}
                       value={props.newPostText}/>
                <button className={style.submitBtn} onClick={submitBtnOnClick}>Post</button>
            </div>
        </FloatingWrapper>
    )
}