import React from "react";
import style from './NewMessageInput.module.css'

export const NewMessageInput = (props) => {

    const onTextAreaChange = (e) => {
        props.onTextAreaChange(e.target.value);
    }

    return (
        <div className={style.wrapper}>
            <span className={style.clip} />
            <input type='text' className={style.messageInput} placeholder={'New message...'}
            value={props.textAreaContent} onChange={onTextAreaChange}/>
            {props.send ?
                <button className={style.send} onClick={props.onSubmitClick}></button> :
                <span className={style.microphone}/>}


        </div>
    )
}