import React from "react";
import style from './DialogHeader.module.css'


export const DialogHeader = (props) => {
    return (
        <div className={style.wrapper}>
            <span className={style.name}>{props.dialogName}</span>
            <span className={style.status}>{props.dialogStatus}</span>
            <div className={style.thumbnail}>
                <img src={props.imgUrl} alt=""/>
            </div>
        </div>
    )
}