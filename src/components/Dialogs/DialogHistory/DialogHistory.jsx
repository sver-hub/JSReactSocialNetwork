import React from "react";
import style from './DialogHistory.module.css'

export const DialogHistory = (props) => {
    return (
        <div className={style.wrapper}>
            {props.messages.map((message) => <div>{message.text}</div>)}
        </div>
    )
}