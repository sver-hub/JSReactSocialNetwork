import React from "react";
import style from './NewMessageInput.module.css'

export const NewMessageInput = () => {
    return (
        <div className={style.wrapper}>
            <span className={style.clip} />
            <input type='text' className={style.messageInput} placeholder={'New message...'}/>
            <span className={style.microphone}/>
        </div>
    )
}