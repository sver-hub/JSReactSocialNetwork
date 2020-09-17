import React from "react";
import style from './NewMessageInput.module.css'
import {sendNewMessageActionCreator, textAreaUpdateActonCreator} from "../../../redux/dialogsReducer";

export const NewMessageInput = (props) => {

    const onSubmitClick = () => {
        props.dispatch(sendNewMessageActionCreator());
    }

    const onTextAreaChanged = (e) => {
        props.dispatch(textAreaUpdateActonCreator(e.target.value));
    }

    return (
        <div className={style.wrapper}>
            <span className={style.clip} />
            <input type='text' className={style.messageInput} placeholder={'New message...'}
            value={props.textAreaContent} onChange={onTextAreaChanged}/>
            <button onClick={onSubmitClick}>Send</button>
            <span className={style.microphone}/>
        </div>
    )
}